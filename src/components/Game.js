import uniqid from 'uniqid';
import { useEffect, useState } from 'react';
import CardsContainer from './CardsContainer/CardsContainer';
import GameEnd from './GameEnd';
import styles from '../style/Game.module.css';
import fordGTImage from '../assets/images/2004-ford-gt.jpg';
import fordMustangImage from '../assets/images/1968-ford-mustang-gt.jpg';
import deloreanImage from '../assets/images/1982-DMC-Delorean.jpg';
import vwGtiImage from '../assets/images/1985-vw-gti.jpg';
import abarthImage from '../assets/images/1976-fiat-131-abarth.jpg';
import astonDB5Image from '../assets/images/1964-aston-martin-db5.jpg';
import porscheImage from '../assets/images/1993-porsche-carrera-993.jpg';
import nsxImage from '../assets/images/1993-honda-nsx.jpg';
import mclarenImage from '../assets/images/1994-mclaren-f1.jpg';
import lanciaImage from '../assets/images/1993-lancia-dDelta-integrale-evo-ii-front.jpg';
import lamboImage from '../assets/images/2003-lambo-gallardo.jpg';
import ferrariImage from '../assets/images/2002-ferrari-enzo-21.jpg';

const Game = ({
  score,
  updateBestScore,
  increaseCurrentScore,
  resetScore,
  restartGame,
}) => {
  const gameCards = [
    {
      id: uniqid(),
      img: fordGTImage,
      description: '2004 Ford GT',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: fordMustangImage,
      description: '1968 Ford Mustang GT',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: deloreanImage,
      description: '1982 DMC Delorean',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: vwGtiImage,
      description: '1985 VW GTI',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: abarthImage,
      description: '1976 Fiat 131 Abarth',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: astonDB5Image,
      description: '1964 Aston Martin DB5',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: porscheImage,
      description: '1993 Porsche 911 Carrera 993',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: nsxImage,
      description: '1993 Honda NSX',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: mclarenImage,
      description: '1994 McLaren F1',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: ferrariImage,
      description: '2002 Ferrari Enzo',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: lamboImage,
      description: 'Lamborghini Gallardo',
      isPicked: false,
    },
    {
      id: uniqid(),
      img: lanciaImage,
      description: '1993 Lancia Delta Integrale Evo II',
      isPicked: false,
    },
  ];

  const [cards, setCards] = useState(gameCards);

  const [isGameRunning, setIsGameRunning] = useState(true);

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

  const gameEnded = () => {
    if (score === 11) {
      return true;
    }
    return false;
  };

  const handleCardClick = (evt) => {
    const cardId = evt.currentTarget.dataset.id;
    if (!isAlreadyPicked(cardId)) {
      setCardPicked(cardId);
      increaseCurrentScore();
      if (gameEnded()) {
        setIsGameRunning(false);
      }
      shuffleCards();
    } else {
      resetScore();
      updateBestScore();
      setCards(gameCards);
    }
  };

  const handleRestartClick = (evt) => {
    setIsGameRunning(true);
    restartGame();
  };

  return (
    <main className={styles.game}>
      {isGameRunning ? (
        <CardsContainer cards={cards} handleCardClick={handleCardClick} />
      ) : (
        <GameEnd handleRestartClick={handleRestartClick} />
      )}
    </main>
  );
};

export default Game;
