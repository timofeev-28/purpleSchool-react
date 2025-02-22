import { useState, useRef } from 'react';
import Input from '../../ui/input/input';
import Button from '../../ui/button/button';
import Form from '../../ui/form/form';
import { ChangeEvent } from 'react';

export default function SearchForm() {
  const [inputValue, setInputValue] = useState<string>('');
  const searchRef = useRef<HTMLInputElement>(null);

  const inputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const clickBtnHandler = (inputValue: string) => {
    console.log(inputValue);
  };

  const onSubmitHandler = (e: { preventDefault: () => void; }) => {
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
              name={'search'}
              type={'text'}
          />
          <Button text="Искать" onClick={() => clickBtnHandler(inputValue)} />
      </Form>
  );
}
