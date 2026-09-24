export default function SectionHead({ index, label, title, note }) {
  return (
    <header className="section-head">
      <p className="section-eyebrow mono">
        <span className="section-index">{index}</span>
        {label}
      </p>
      <h2 className="section-title">{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </header>
  );
}
