import styles from '../style/GameEnd.module.css';

const GameEnd = ({ handleRestartClick }) => {
  return (
    <div className={styles['game-end']}>
      <h1>YOU WON</h1>
      <button className={styles['restart-btn']} onClick={handleRestartClick}>
        RESTART
      </button>
    </div>
  );
};

export default GameEnd;
