import { useState, useRef } from 'react';
import Input from '../input/input';
import Button from '../button/button';
import Form from '../form/form';

export default function SearchForm() {
  const [inputValue, setInputValue] = useState('');
  const searchRef = useRef();

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const clickBtnHandler = (inputValue) => {
    console.log(inputValue);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmitHandler}>
      <Input
        appearance="icon"
        ref={searchRef}
        placeholder="Введите название"
        value={inputValue}
        onChange={inputChange}
      />
      <Button text="Искать" onClick={() => clickBtnHandler(inputValue)} />
    </Form>
  );
}
