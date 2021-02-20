import React, { useState } from 'react';
import GameListSelection from './components/GameListSelection/GameListSelection'
import PlayingGame from './components/PlayingGame/PlayingGame'
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameField.scss';

const GameField = ({version, gameInit, setGameInit, setScoreSet, scoreSet, score, setScore}) => {
  const [chosenItem, setChosenItem] = useState('')

  return (
    <div className="game-field">

      { !gameInit ? (
        <GameListSelection
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
          score={score}
          setScore={setScore}
        />
      ) : (
        <PlayingGame
          chosenItem={chosenItem}
          version={version}
          gameInit={gameInit}
          setScoreSet={setScoreSet}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
          scoreSet={scoreSet}
          score={score}
          setScore={setScore}
        />
      ) }

    </div>
  );
};

export default GameField;
