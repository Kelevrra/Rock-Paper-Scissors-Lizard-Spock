import React, { useState } from 'react';
import GameListSelection from './components/GameListSelection/GameListSelection'
import PlayingGame from './components/PlayingGame/PlayingGame'
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameField.scss';
//Audio
import AudioPlay from '../AudioPlay/AudioPlay'
import reptile from '../../assets/audio/reptile.mp3'
import rockJonson from '../../assets/audio/rock-jonson.mp3'

const GameField = ({
  version,
  gameInit,
  setGameInit,
  score,
  setScore,
  soundOn
}) => {
  
  const [chosenItem, setChosenItem] = useState('')

  const setAudio = () => {
    if(chosenItem === 'lizard') return reptile
    if(chosenItem === 'rock') return rockJonson
    return ''
  }

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
          soundOn={soundOn}
        />
      ) }

      { !version && soundOn ? (
        <AudioPlay audio={setAudio()} />
      ) : (
        <AudioPlay audio={``} />
      )}

    </div>
  );
};

export default GameField;
