import Scoreboard from './Scoreboard';
import styles from '../style/HeaderScoreboard.module.css';

const Header = ({ score, bestScore }) => {
  return (
    <header className={styles.head}>
      <div className={styles.logo}>
        <h1>Cars! Memory Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than
          once.
        </p>
      </div>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
};

export default Header;
