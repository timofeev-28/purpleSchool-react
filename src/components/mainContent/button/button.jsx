import "./button.css";

export default function Button({ text, onClick }) {
  return (
    <button className="btn" onClick={onClick} type="button">
      {text}
    </button>
  );
}
