export default function featureItem({ icone, description, title }) {
  return (
    <div className="feature-item">
      <img src={icone} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{description} </p>
    </div>
  );
}
