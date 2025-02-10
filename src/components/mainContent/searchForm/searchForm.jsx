import { useState, useRef } from "react";
import Input from "../input/input.jsx";
import Button from "../button/button.jsx";
import Form from "../form/form.jsx";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
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
