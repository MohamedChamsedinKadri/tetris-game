import React from 'react';
import Game from './components/Game';
import { playSound } from './utils/sounds';

const App: React.FC = () => {
  return (
      <div className="App">
        <h1>Tetris Game</h1>
        <button onClick={() => playSound('theme')}>Start Game</button>  {/* Start the theme music */}
        <Game />
      </div>
  );
};

export default App;
