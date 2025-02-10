import styles from "./form.module.css";
import cn from "classnames";

export default function Form({ children, onSubmit, appearance }) {
  return (
    <form
      className={cn(styles.form, {
        [styles.form__entrance]: appearance === "entrance",
      })}
      onSubmit={onSubmit}
    >
      {children}
    </form>
  );
}
