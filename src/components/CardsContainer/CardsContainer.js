import { Fragment } from 'react';
import Card from './Card';
import './CardsContainer.css';

const CardsContainer = (props) => {
  const getCards = () => {
    return props.cards.map((card) => {
      return (
        <Fragment key={card.id}>
          <Card
            id={card.id}
            img={card.img}
            description={card.description}
            handleCardClick={props.handleCardClick}
          />
        </Fragment>
      );
    });
  };

  return <section>{getCards()}</section>;
};

export default CardsContainer;
