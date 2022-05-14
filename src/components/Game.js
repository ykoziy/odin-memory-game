import CardsContainer from './CardsContainer/CardsContainer';
import styles from '../style/Game.module.css';

const Game = () => {
  return (
    <main className={styles.game}>
      <CardsContainer />
    </main>
  );
};

export default Game;
