import React from 'react';
import GameItem from './components/GameItem/GameItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameField.scss';

const GameField = () => {
  return (
    <div className="game-field">
      {/* <div className="game-field__crcl"></div> */}
      <div className="game-field__list">
        <div className="row justify-content-between row-1">
            <GameItem className="item" item={'rock'} />
            <GameItem className="item" item={'scissors'} />
          </div>
          <div className="row justify-content-center row-2">
              <GameItem className="item" item={'paper'} />
          </div>
          <div className="row justify-content-between row-3">           
            <GameItem className="item" item={'lizard'} />
            <GameItem className="item" item={'spock'} />
        </div>
      </div>
    </div>
  );
}

export default GameField;
