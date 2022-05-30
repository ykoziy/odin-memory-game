import { Fragment } from 'react';
import Card from './Card';
import './CardsContainer.css';

const CardsContainer = (props) => {
  const getCards = () => {
    return props.cards.map((card) => {
      console.log(card.img);
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

// id: uniqid(),
// img: 'img url 10',
// description: 'card 10',
// isPicked: false,
