import { forwardRef } from "react";
import cn from "classnames";
import styles from "./input.module.css";

const Input = forwardRef(function Input(
  { placeholder, value, onChange, appearance, isValid = true, isLogined },
  ref
) {
  const pl = placeholder ? placeholder : "";

  return (
    <input
      className={cn(styles["input"], {
        [styles["input-icon"]]: appearance === "icon",
        [styles["invalid"]]: !isValid,
      })}
      name="userName"
      disabled={isLogined}
      ref={ref}
      type="text"
      placeholder={pl}
      value={value}
      onChange={onChange}
    />
  );
});

export default Input;
