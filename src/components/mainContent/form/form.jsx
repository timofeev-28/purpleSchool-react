import "./form.css";
import { useState } from "react";
import data from "../../../assets/data.jsx";
import Search from "../search/search.jsx";
import Button from "../button/button.jsx";

export default function Form() {
  const [inputValue, setInputValue] = useState("");

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
    <form className="form" onSubmit={onSubmitHandler}>
      <Search
        className={"input-svg"}
        placeholder={data.mainPage.placeholder}
        value={inputValue}
        onChange={inputChange}
      />
      <Button
        text={data.mainPage.button}
        onClick={() => clickBtnHandler(inputValue)}
      />
    </form>
  );
}
