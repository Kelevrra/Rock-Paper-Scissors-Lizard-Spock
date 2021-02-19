import React, {useState} from 'react';
import GameItem from '../GameItem/GameItem';
import GameItemBot from '../GameItemBot/GameItemBot';
import ReloadPopup from '../ReloadPopup/ReloadPopup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayingGame.scss'

import rock from '../../../../assets/rock-fun.png'
import paper from '../../../../assets/paper-fun.jpg'
import scissors from '../../../../assets/scissors-fun.jpeg'
import lizard from '../../../../assets/lizard-fun.jpg'
import spock from '../../../../assets/spock-fun.jpg'

const PlayingGame = ({chosenItem, setGameInit, setChosenItem, setScore, score}) => {
  const variants = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  const [botItem, setBotItem] = useState(variants[Math.floor(Math.random() * variants.length)])
  const [timerUp, setTimerUp] = useState(false)
  const [winner, setWinner] = useState(false)

  const bgPlay = chosenItem === '' ? '' : (chosenItem === 'rock' ? rock 
  : chosenItem === 'paper' ? paper
  : chosenItem === 'scissors' ? scissors
  : chosenItem === 'lizard' ? lizard
  : spock);

  return (
    <div className="playing-game d-flex align-items-center justify-content-between">
      <GameItem
        bgPlay={bgPlay}
        chosenItem={chosenItem}
        setWinner={setWinner}
        winner={winner}
      />
      <GameItemBot 
        botItem={botItem} 
        setBotItem={setBotItem}
        setTimerUp={setTimerUp}
        setWinner={setWinner}
        winner={winner}
        chosenItem={chosenItem}
        setScore={setScore}
        score={score}
      />
      <ReloadPopup
        setGameInit={setGameInit}
        setChosenItem={setChosenItem}
        setScore={setScore}
        score={score}
        timerUp={timerUp}
        chosenItem={chosenItem}
        botItem={botItem}
      />
    </div>
  );
}

export default PlayingGame;
