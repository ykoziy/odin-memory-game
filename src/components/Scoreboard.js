import styles from '../style/HeaderScoreboard.module.css';

function Scoreboard() {
  return (
    <div className={styles.scoreboard}>
      <div>Score: 0</div>
      <div>Best Score: 0</div>
    </div>
  );
}

export default Scoreboard;
