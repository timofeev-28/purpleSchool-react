import styles from "./title.module.css";
import { TitleProps } from './title.props';

export default function Title({ title }: TitleProps ) {
  return <h1 className={styles.title}>{title}</h1>;
}
