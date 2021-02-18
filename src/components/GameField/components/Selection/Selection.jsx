import React from 'react';
import GameItem from '../components/GameItem/GameItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Selection.scss';

const Selection = ({version, gameInit, setGameInit}) => {
  return (
      <div className="game-field__list">
        <div className="row justify-content-between row-1">
            <GameItem
              className="item"
              item={'rock'}
              version={version}
              gameInit={gameInit}
              setGameInit={setGameInit}
            />
            <GameItem
              className="item"
              item={'scissors'}
              version={version}
              gameInit={gameInit}
              setGameInit={setGameInit}
            />
          </div>
          <div className="row justify-content-center row-2">
              <GameItem
                className="item"
                item={'paper'}
                version={version}
                gameInit={gameInit}
                setGameInit={setGameInit}
              />
          </div>
          <div className="row justify-content-between row-3">           
            <GameItem
              className="item"
              item={'lizard'}
              version={version}
              gameInit={gameInit}
              setGameInit={setGameInit}
            />
            <GameItem
              className="item"
              item={'spock'}
              version={version}
              gameInit={gameInit}
              setGameInit={setGameInit}
            />
        </div>
      </div>
  );
}

export default Selection;
