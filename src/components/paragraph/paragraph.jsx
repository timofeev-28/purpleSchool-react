import "./paragraph.css";

export default function Paragraph({ text, fz }) {
  return (
    <p className="descr" style={{ fontSize: Number(fz) }}>
      {text}
    </p>
  );
}
