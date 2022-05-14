import Scoreboard from './Scoreboard';
import styles from '../style/HeaderScoreboard.module.css';

const Header = () => {
  return (
    <header className={styles.head}>
      <h1>Memory Game Header</h1>
      <Scoreboard />
    </header>
  );
};

export default Header;
