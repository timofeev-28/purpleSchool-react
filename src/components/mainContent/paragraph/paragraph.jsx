import "./paragraph.css";

export default function Paragraph({ text, className }) {
  const cl = "descr" + (className ? " " + className : "");

  return <p className={cl}>{text}</p>;
}
