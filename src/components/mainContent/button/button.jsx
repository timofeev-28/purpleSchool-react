import styles from "./button.module.css";

export default function Button({ text, onClick }) {
  return (
    <button className={styles["btn"]} onClick={onClick} type="button">
      {text}
    </button>
  );
}
