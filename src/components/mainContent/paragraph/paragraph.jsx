import cn from "classnames";
import styles from "./paragraph.module.css";

export default function Paragraph({ text, className }) {
  return (
    <p
      className={cn(styles["descr"], {
        [styles[className]]: className,
      })}
    >
      {text}
    </p>
  );
}
