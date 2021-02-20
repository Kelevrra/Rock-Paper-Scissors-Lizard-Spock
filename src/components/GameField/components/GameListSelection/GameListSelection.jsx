import React from 'react';
import GameItem from '../GameItem/GameItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameListSelection.scss';

const Selection = ({ version, gameInit, setGameInit, setChosenItem, score, setScore}) => {
  return (
    <div className="game-field__list">
      <div className="row justify-content-between row-1">
        <GameItem
          item={'rock'}
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}

        score={score}
        setScore={setScore}
        />
        <GameItem
          item={'scissors'}
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}

                  score={score}
        setScore={setScore}
        />
      </div>
      <div className="row justify-content-center row-2">
        <GameItem
          item={'paper'}
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}

                  score={score}
        setScore={setScore}
        />
      </div>
      <div className="row justify-content-between row-3">
        <GameItem
          item={'lizard'}
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem} 

                  score={score}
        setScore={setScore}
        />
        <GameItem
          item={'spock'}
          version={version}
          gameInit={gameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}

                  score={score}
        setScore={setScore}
        />
      </div>
    </div>
  );
}

export default Selection;
