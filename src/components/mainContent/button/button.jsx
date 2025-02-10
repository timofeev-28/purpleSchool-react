import styles from "./button.module.css";

export default function Button({ text, isLogined }) {
  return (
    <button className={styles.btn} type='submit' disabled={isLogined}>
      {text}
    </button>
  );
}
