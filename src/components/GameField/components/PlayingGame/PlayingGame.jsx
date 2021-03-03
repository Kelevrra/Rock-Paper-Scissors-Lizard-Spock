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
  isVersion,
  isGameInit,
  setChosenItem,
  setGameInit,
  score,
  setScore,
  isSoundOn
}) => {
  
  const [isTimerUp, setIsTimerUp] = useState(false)
  const variants = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  const [botItem, setBotItem] = useState(variants[Math.floor(Math.random() * variants.length)])

  const userWin = gameRulls(chosenItem, botItem) === 'win'
  const userLose = gameRulls(chosenItem, botItem) === 'lose'
  const draw = gameRulls(chosenItem, botItem) === 'nobody'

  const imgPlay = () => {
    if(!chosenItem ) return ''
    else {
      if(!isVersion && chosenItem) {
        if(chosenItem === 'rock') return rockFun
        if(chosenItem === 'paper') return paperFun
        if(chosenItem === 'scissors') return scissorsFun
        if(chosenItem === 'lizard') return lizardFun
        return spockFun
      } else {
        if(chosenItem === 'rock') return rock
        if(chosenItem === 'paper') return paper
        if(chosenItem === 'scissors') return scissors
        if(chosenItem === 'lizard') return lizard
        return spock
      }
    }
  }

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

  const updateScore = isTimerUp ? setScore(counter) : setScore(score)

  return (
    <div className="playing-game d-flex align-items-center justify-content-between">

      <GameItem
        chosenItem={chosenItem}
        botItem={botItem}
        isGameInit={isGameInit}
        isTimerUp={isTimerUp}
        imgPlay={imgPlay}
        userWin={userWin}
        setGameInit={setGameInit}
        setChosenItem={setChosenItem}
      />

      <GameItemBot
        isVersion={isVersion}
        chosenItem={chosenItem}
        botItem={botItem} 
        setIsTimerUp={setIsTimerUp}
        userLose={userLose}
      />

      <ReloadPopup
        setGameInit={setGameInit}
        setChosenItem={setChosenItem}
        isTimerUp={isTimerUp}
        chosenItem={chosenItem}
        botItem={botItem}
        isVersion={isVersion}
        userWin={userWin}
        userLose={userLose}
        draw={draw}
        isSoundOn={isSoundOn}
      />

    </div>
  );
}

export default PlayingGame;
