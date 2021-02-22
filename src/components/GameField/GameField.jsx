import React, { useState } from 'react';
import GameListSelection from './components/GameListSelection/GameListSelection'
import PlayingGame from './components/PlayingGame/PlayingGame'
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameField.scss';

const GameField = ({
  version,
  gameInit,
  setGameInit,
  score,
  setScore
}) => {
  
  const [chosenItem, setChosenItem] = useState('')

  return (
    <div className="game-field">

      { !gameInit ? (
        <GameListSelection
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
        />
      ) : (
        <PlayingGame
          chosenItem={chosenItem}
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
          score={score}
          setScore={setScore}
        />
      ) }

    </div>
  );
};

export default GameField;
