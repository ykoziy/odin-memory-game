import './CardsContainer.css';

const Card = (props) => {
  return (
    <div className="card" onClick={props.handleCardClick} data-id={props.id}>
      <h3>{props.description}</h3>
      <img src={props.img} alt="card..." />
    </div>
  );
};

export default Card;
