import styles from '../style/HeaderScoreboard.module.css';

const Scoreboard = (props) => {
  return (
    <div className={styles.scoreboard}>
      <div>Score: {props.score}</div>
      <div>Best Score: {props.bestScore}</div>
    </div>
  );
};

export default Scoreboard;
