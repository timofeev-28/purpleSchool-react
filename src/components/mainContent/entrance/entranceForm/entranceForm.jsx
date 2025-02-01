import { useEffect, useReducer, useRef, useContext } from "react";
import Input from "../../input/input";
import Button from "../../button/button";
import Form from "../../form/form";
import { formReducer, INITIAL_STATE } from "./entranceForm.state.js";
import { UserContext } from "../../../../context/user.context";

export default function EntranceForm() {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, value, isFormReadyToSubmit } = formState;
  const { user, setUser } = useContext(UserContext);
  const userRef = useRef();

  const focusError = () => {
    userRef.current.focus();
  };

  useEffect(() => {
    if (!isValid.userName) {
      focusError(isValid);
    }
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      setUser({ name: value.userName, isLogined: true });
      dispatchForm({ type: "CLEAR" });
    }
  }, [isFormReadyToSubmit]);

  const inputChange = (e) => {
    if (!value.userName) {
      dispatchForm({ type: "RESET_VALIDITY" });
    }
    dispatchForm({
      type: "SET_VALUE",
      payload: { [e.target.name]: e.target.value },
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatchForm({ type: "SUBMIT" });
  };

  return (
    <Form appearance="entrance" onSubmit={onSubmitHandler}>
      <Input
        ref={userRef}
        type="text"
        name="userName"
        isValid={isValid.userName}
        isLogined={user?.isLogined}
        placeholder="Ваше имя"
        value={value.userName}
        onChange={inputChange}
      />
      <Button text="Войти в профиль" isLogined={user?.isLogined} />
    </Form>
  );
}
