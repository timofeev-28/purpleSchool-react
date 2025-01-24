import { useEffect, useReducer, useRef } from "react";
import Input from "../../input/input.jsx";
import Button from "../../button/button.jsx";
import Form from "../../form/form.jsx";
import { formReducer, INITIAL_STATE } from "./entranceForm.state.js";

export default function EntranceForm({ onSubmit, isLogined }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, value, isFormReadyToSubmit } = formState;
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
      onSubmit(value);
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
        isLogined={isLogined}
        placeholder="Ваше имя"
        value={value.userName}
        onChange={inputChange}
      />
      <Button text="Войти в профиль" isLogined={isLogined} />
    </Form>
  );
}
