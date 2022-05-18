import styles from '../style/HeaderScoreboard.module.css';

const Scoreboard = (props) => {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.score}>
        <h2>Score: {props.score}</h2>
      </div>
      <div className={styles['best-score']}>
        <h2>Best Score: {props.bestScore}</h2>
      </div>
    </div>
  );
};

export default Scoreboard;
