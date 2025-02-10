import cn from "classnames";
import styles from "./paragraph.module.css";

export default function Paragraph({ text, appearance }) {
  return (
    <p
      className={cn(styles.descr, {
        [styles.fz20]: appearance === "fz20",
      })}
    >
      {text}
    </p>
  );
}
