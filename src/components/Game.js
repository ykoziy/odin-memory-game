import uniqid from 'uniqid';
import { useEffect, useRef, useState } from 'react';
import CardsContainer from './CardsContainer/CardsContainer';
import styles from '../style/Game.module.css';

const Game = ({ updateBestScore, increaseCurrentScore, resetScore }) => {
  const gameCards = [
    { id: uniqid(), img: 'img url 1', description: 'Card 1', isPicked: false },
    { id: uniqid(), img: 'img url 2', description: 'Card 2', isPicked: false },
    { id: uniqid(), img: 'img url 3', description: 'Card 3', isPicked: false },
    { id: uniqid(), img: 'img url 4', description: 'Card 4', isPicked: false },
    { id: uniqid(), img: 'img url 5', description: 'Card 5', isPicked: false },
    { id: uniqid(), img: 'img url 6', description: 'Card 6', isPicked: false },
    { id: uniqid(), img: 'img url 7', description: 'Card 7', isPicked: false },
    { id: uniqid(), img: 'img url 8', description: 'Card 8', isPicked: false },
    { id: uniqid(), img: 'img url 9', description: 'Card 9', isPicked: false },
    {
      id: uniqid(),
      img: 'img url 10',
      description: 'card 10',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: 'img url 11',
      description: 'card 11',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: 'img url 12',
      description: 'card 12',
      isPicked: false,
    },
  ];

  const [cards, setCards] = useState(gameCards);

  const shuffleCards = () => {
    let array = [...cards];
    let count = array.length;
    let randomIndex, tempCopy;

    while (count) {
      randomIndex = Math.floor(Math.random() * count--);
      tempCopy = array[count];
      array[count] = array[randomIndex];
      array[randomIndex] = tempCopy;
    }
    setCards([...array]);
  };

  const setCardPicked = (id) => {
    let array = [...cards];
    array.map((element) => {
      if (element.id === id) {
        element.isPicked = true;
        return element;
      } else {
        return element;
      }
    });
    setCards([...array]);
  };

  const isAlreadyPicked = (id) => {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === id) {
        if (cards[i].isPicked === true) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardClick = (evt) => {
    const cardId = evt.target.dataset.id;
    if (!isAlreadyPicked(cardId)) {
      setCardPicked(cardId);
      increaseCurrentScore();
      shuffleCards();
    } else {
      resetScore();
      updateBestScore();
      setCards(gameCards);
    }
  };

  return (
    <main className={styles.game}>
      <CardsContainer cards={cards} handleCardClick={handleCardClick} />
    </main>
  );
};

export default Game;
