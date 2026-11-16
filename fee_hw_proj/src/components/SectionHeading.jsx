// Keep page headings visually consistent and reusable.
function SectionHeading(props) {
  return (
    <div className="section-heading">
      <div>
        {props.eyebrow && <p className="eyebrow">{props.eyebrow}</p>}
        <h1>{props.title}</h1>
      </div>
      {props.description && <p className="section-description">{props.description}</p>}
    </div>
  );
}

export default SectionHeading;