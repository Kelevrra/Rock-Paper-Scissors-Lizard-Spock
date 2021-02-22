import React, { useState, useEffect } from 'react';
import GameItem from '../GameItem/GameItem';
import GameItemBot from '../GameItemBot/GameItemBot';
import ReloadPopup from '../ReloadPopup/ReloadPopup';
import gameRulls from '../../../../data/gameRulls';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayingGame.scss'
//Pics
import rock from '../../../../assets/rock.svg'
import paper from '../../../../assets/paper.svg'
import scissors from '../../../../assets/scissors.svg'
import lizard from '../../../../assets/lizard.svg'
import spock from '../../../../assets/spock.svg'
import rockFun from '../../../../assets/rock-fun.png'
import paperFun from '../../../../assets/paper-fun.jpg'
import scissorsFun from '../../../../assets/scissors-fun.jpeg'
import lizardFun from '../../../../assets/lizard-fun.jpg'
import spockFun from '../../../../assets/spock-fun.jpg'

const PlayingGame = ({
  chosenItem,
  version,
  gameInit,
  setChosenItem,
  setGameInit,
  score,
  setScore
}) => {
  
  const [timerUp, setTimerUp] = useState(false)
  const variants = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  const [botItem, setBotItem] = useState(variants[Math.floor(Math.random() * variants.length)])

  const userWin = gameRulls(chosenItem, botItem) === 'win'
  const userLose = gameRulls(chosenItem, botItem) === 'lose'
  const draw = gameRulls(chosenItem, botItem) === 'nobody'

  const imgPlay = !chosenItem ? '' 
  : !version && chosenItem !== '' ? (chosenItem === 'rock' ? rockFun
  : chosenItem === 'paper' ? paperFun
  : chosenItem === 'scissors' ? scissorsFun
  : chosenItem === 'lizard' ? lizardFun
  : spockFun) : (chosenItem === 'rock' ? rock
  : chosenItem === 'paper' ? paper
  : chosenItem === 'scissors' ? scissors
  : chosenItem === 'lizard' ? lizard
  : spock);

  const [counter, setCounter] = useState(score)

  const counterUpdate = () => {
    if(userWin) {
      setCounter(counter + 1)
    } 
    if (userLose) {
      setCounter(counter - 1)
    }
  }

  useEffect(() => {
    counterUpdate()
  },[])

  const updateScore = timerUp ? setScore(counter) : setScore(score)

  return (
    <div className="playing-game d-flex align-items-center justify-content-between">

      <GameItem
        chosenItem={chosenItem}
        botItem={botItem}
        gameInit={gameInit}
        timerUp={timerUp}
        imgPlay={imgPlay}
        userWin={userWin}
      />

      <GameItemBot
        version={version}
        chosenItem={chosenItem}
        botItem={botItem} 
        setTimerUp={setTimerUp}
        userLose={userLose}
      />

      <ReloadPopup
        setGameInit={setGameInit}
        setChosenItem={setChosenItem}
        timerUp={timerUp}
        chosenItem={chosenItem}
        botItem={botItem}
        version={version}
        userWin={userWin}
        userLose={userLose}
        draw={draw}
      />

    </div>
  );
}

export default PlayingGame;
