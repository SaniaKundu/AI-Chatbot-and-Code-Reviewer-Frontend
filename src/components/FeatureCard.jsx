import { Link } from "react-router-dom";

function FeatureCard({
  icon,
  title,
  description,
  buttonText,
  link
}) {

  return (

    <div className="feature-card">

      <div className="feature-icon">
        {icon}
      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <Link className="feature-card-link" to={link}>
        {buttonText}
      </Link>

    </div>

  );
}

export default FeatureCard;