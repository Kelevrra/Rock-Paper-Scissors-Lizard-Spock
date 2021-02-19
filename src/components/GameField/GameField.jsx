import React, { useState } from 'react';
import GameItem from './components/GameItem/GameItem';
import PlayingGame from './components/PlayingGame/PlayingGame';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameField.scss';

const GameField = ({version, gameInit, setGameInit, setScore, score}) => {
  const [chosenItem, setChosenItem] = useState('')

  return (
    <div className="game-field">

    { !gameInit ?
          <div className="game-field__list">
            <div className="row justify-content-between row-1">
                <GameItem
                  className="item"
                  item={'rock'}
                  version={version}
                  gameInit={gameInit}
                  setGameInit={setGameInit}
                  setChosenItem={setChosenItem}
                  chosenItem={chosenItem}
                />
                <GameItem
                  className="item"
                  item={'scissors'}
                  version={version}
                  gameInit={gameInit}
                  setGameInit={setGameInit}
                  setChosenItem={setChosenItem}
                  chosenItem={chosenItem}
                />
              </div>
              <div className="row justify-content-center row-2">
                  <GameItem
                    className="item"
                    item={'paper'}
                    version={version}
                    gameInit={gameInit}
                    setGameInit={setGameInit}
                    setChosenItem={setChosenItem}
                    chosenItem={chosenItem}
                  />
              </div>
              <div className="row justify-content-between row-3">           
                <GameItem
                  className="item"
                  item={'lizard'}
                  version={version}
                  gameInit={gameInit}
                  setGameInit={setGameInit}
                  setChosenItem={setChosenItem}
                  chosenItem={chosenItem}
                />
                <GameItem
                  className="item"
                  item={'spock'}
                  version={version}
                  gameInit={gameInit}
                  setGameInit={setGameInit}
                  setChosenItem={setChosenItem}
                  chosenItem={chosenItem}
                />
            </div>
          </div>
    : <PlayingGame
      score={score}
      setScore={setScore}
      setChosenItem={setChosenItem}
      chosenItem={chosenItem}
      setGameInit={setGameInit}
      version={version}
    />}

    </div>
  );
}

export default GameField;
