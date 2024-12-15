import "./search.css";

export default function Search({ placeholder, value, onChange, className }) {
  const pl = placeholder ? placeholder : "";
  const cl = "input" + " " + (className ? className : "");

  return (
    <input
      className={cl}
      type="text"
      placeholder={pl}
      value={value}
      onChange={onChange}
    />
  );
}
