import styles from "./logo.module.css";

export default function Logo() {
  return (
    <a className={styles.header__logo} href='./'>
      <img src='/icons/logo.svg' width={49} height={40} alt='Логотип сайта' />
    </a>
  );
}
