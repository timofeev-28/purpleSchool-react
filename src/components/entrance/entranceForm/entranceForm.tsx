import { useEffect, useReducer, useRef, useContext, FormEvent, ChangeEvent } from 'react';
import Input from '../../ui/input/input';
import Button from '../../ui/button/button';
import Form from '../../ui/form/form';
import { formReducer, INITIAL_STATE } from './entranceForm.state.js';
import { UserContext } from '../../../context/user.context';


export default function EntranceForm() {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, value, isFormReadyToSubmit } = formState;
  const { user, setUser } = useContext(UserContext);
  const userRef = useRef<HTMLInputElement>(null);

  const focusError = () => {
    if (userRef.current) {
      userRef.current.focus();
    }
  };

  useEffect(() => {
    if (!isValid.userName) {
      focusError();
    }
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      setUser({ name: value.userName, isLogined: true });
      dispatchForm({ type: 'CLEAR' });
    }
  }, [isFormReadyToSubmit]);

  const inputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!value.userName) {
      dispatchForm({ type: 'RESET_VALIDITY' });
    }
    dispatchForm({
      type: 'SET_VALUE',
      payload: { userName: e.target.value }
    });
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatchForm({ type: 'SUBMIT' });
  };

  return (
    <Form appearance="entrance" onSubmit={onSubmitHandler}>
      <Input
        ref={userRef}
        appearance="entrance"
        type='text'
        name='userName'
        isValid={isValid.userName}
        isLogined={user?.isLogined}
        placeholder='Ваше имя'
        value={value.userName}
        onChange={inputChange}
      />
      <Button text='Войти в профиль' isLogined={user?.isLogined} />
    </Form>
  );
}
