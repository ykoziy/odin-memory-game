import Scoreboard from './Scoreboard';
import styles from '../style/HeaderScoreboard.module.css';

const Header = ({ score, bestScore }) => {
  return (
    <header className={styles.head}>
      <h1>Memory Game Header</h1>
      <Scoreboard score={score} bestScore={bestScore} />
    </header>
  );
};

export default Header;
