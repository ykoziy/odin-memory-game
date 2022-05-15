import uniqid from 'uniqid';
import { useEffect, useRef, useState } from 'react';
import CardsContainer from './CardsContainer/CardsContainer';
import styles from '../style/Game.module.css';

const Game = ({ updateBestScore, increaseCurrentScore, resetScore }) => {
  const gameCards = [
    {
      id: uniqid(),
      img: '/images/2004-ford-gt.jpg',
      description: '2004 Ford GT',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1968-ford-mustang-gt.jpg',
      description: '1968 Ford Mustang GT',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1982-DMC-Delorean.jpg',
      description: '1982 DMC Delorean',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1985-vw-gti.jpg',
      description: '1985 VW GTI',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1976-fiat-131-abarth.jpg',
      description: '1976 Fiat 131 Abarth',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1964-aston-martin-db5.jpg',
      description: '1964 Aston Martin DB5',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1993-porsche-carrera-993.jpg',
      description: '1993 Porsche 911 Carrera 993',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1993-honda-nsx.jpg',
      description: '1993 Honda NSX',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1994-mclaren-f1.jpg',
      description: '1994 McLaren F1',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/2002-ferrari-enzo-21.jpg',
      description: '2002 Ferrari Enzo',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/2003-lambo-gallardo.jpg',
      description: 'Lamborghini Gallardo',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: '/images/1993-lancia-dDelta-integrale-evo-ii-front.jpg',
      description: '1993 Lancia Delta Integrale Evo II',
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
    const cardId = evt.currentTarget.dataset.id;
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
