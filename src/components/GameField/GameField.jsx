import React, { useState } from 'react';
import GameListSelection from './components/GameListSelection/GameListSelection'
import PlayingGame from './components/PlayingGame/PlayingGame'
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameField.scss';
//Audio
import AudioPlay from '../AudioPlay/AudioPlay';
import reptile from '../../assets/audio/reptile.mp3';
import rockJonson from '../../assets/audio/rock-jonson.mp3';
import clickSound from '../../assets/audio/click.mp3';
import paper from '../../assets/audio/paper.mp3';
import scissors from '../../assets/audio/scissors.mp3';
import greetings from '../../assets/audio/greetings.mp3';

const GameField = ({
  isVersion,
  isGameInit,
  setGameInit,
  score,
  setScore,
  isSoundOn
}) => {
  
  const [chosenItem, setChosenItem] = useState('')

  const setAudio = () => {
    if(chosenItem && isVersion) return clickSound 
    else {
      if(chosenItem === 'lizard') return reptile
      if(chosenItem === 'rock') return rockJonson
      if(chosenItem === 'paper') return paper
      if(chosenItem === 'scissors') return scissors
      if(chosenItem === 'spock') return greetings
    }
    return ''
  }

  return (
    <div className="game-field">

      { !isGameInit ? (
        <GameListSelection
          isVersion={isVersion}
          isGameInit={isGameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
        />
      ) : (
        <PlayingGame
          chosenItem={chosenItem}
          isVersion={isVersion}
          isGameInit={isGameInit}
          setGameInit={setGameInit}
          setChosenItem={setChosenItem}
          score={score}
          setScore={setScore}
          isSoundOn={isSoundOn}
        />
      ) }

      { isSoundOn ? (
        <AudioPlay audio={setAudio()} />
      ) : (
        <AudioPlay audio={``} />
      )}

    </div>
  );
};

export default GameField;
