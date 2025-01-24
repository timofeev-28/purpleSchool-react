import Title from "../title/title";
// import styles from "./entrance.module.css";
// import data from "../../../assets/data.jsx";
import EntranceForm from "./entranceForm/entranceForm.jsx";

export default function Entrance({ onSubmit, isLogined }) {
  return (
    <>
      <Title title="Вход" />
      <EntranceForm onSubmit={onSubmit} isLogined={isLogined} />
    </>
  );
}
