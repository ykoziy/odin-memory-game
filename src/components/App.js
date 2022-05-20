import { useState } from 'react';
import Game from './Game';
import Header from './Header';

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const increaseCurrentScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const resetScore = () => {
    setCurrentScore(0);
  };

  const updateBestScore = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  };

  const restartGame = () => {
    setBestScore(0);
    resetScore();
  };

  return (
    <div className="App">
      <Header score={currentScore} bestScore={bestScore} />
      <Game
        score={currentScore}
        updateBestScore={updateBestScore}
        increaseCurrentScore={increaseCurrentScore}
        resetScore={resetScore}
        restartGame={restartGame}
      />
    </div>
  );
};

export default App;
