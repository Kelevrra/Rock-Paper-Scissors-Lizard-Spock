import React from 'react';
import GameItem from '../GameItem/GameItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameListSelection.scss';

const Selection = ({
  isVersion,
  gameInit,
  setGameInit,
  setChosenItem
}) => {

  return (
    <div className="game-field__list">
      <div className="row justify-content-between row-1">
        <GameItem
          item={'rock'}
          isVersion={isVersion}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
        />

        <GameItem
          item={'scissors'}
          isVersion={isVersion}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
        />
      </div>
      <div className="row justify-content-center row-2">
        <GameItem
          item={'paper'}
          isVersion={isVersion}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
        />
      </div>
      <div className="row justify-content-between row-3">
        <GameItem
          item={'lizard'}
          isVersion={isVersion}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem} 
        />
        <GameItem
          item={'spock'}
          isVersion={isVersion}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
        />
      </div>
    </div>
  );
}

export default Selection;
