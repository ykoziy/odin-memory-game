import './CardsContainer.css';

const Card = (props) => {
  return (
    <div className="card" onClick={props.handleCardClick} data-id={props.id}>
      <img src={props.img} alt="card..." />
      <div className="card-overlay">
        <h3>{props.description}</h3>
      </div>
    </div>
  );
};

export default Card;
