import cn from "classnames";
import styles from "./search.module.css";

export default function Search({ placeholder, value, onChange, className }) {
  const pl = placeholder ? placeholder : "";

  return (
    <input
      className={cn(styles["input"], {
        [styles[className]]: className,
      })}
      type="text"
      placeholder={pl}
      value={value}
      onChange={onChange}
    />
  );
}
