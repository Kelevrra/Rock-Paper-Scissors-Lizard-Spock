import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameItemBot.scss';
//Pics
import rock from '../../../../assets/rock.svg';
import paper from '../../../../assets/paper.svg';
import scissors from '../../../../assets/scissors.svg';
import lizard from '../../../../assets/lizard.svg';
import spock from '../../../../assets/spock.svg';
import rockFun from '../../../../assets/rock-fun.png';
import paperFun from '../../../../assets/paper-fun.jpg';
import scissorsFun from '../../../../assets/scissors-fun.jpeg';
import lizardFun from '../../../../assets/lizard-fun.jpg';
import spockFun from '../../../../assets/spock-fun.jpg';

const GameItemBot = ({
  botItem,
  setIsTimerUp,
  chosenItem,
  isVersion,
  userLose
}) => {
  
  const [timer, setTimer] = useState(3)
  let count = timer > 0 ? setTimeout(() => setTimer(timer - 1), 1000) : setIsTimerUp(true)

  const itemImg = () => {
    if(!botItem) return ''
    else {
      if(!isVersion && botItem) {
        if(botItem === 'rock') return rockFun
        if(botItem === 'paper') return paperFun
        if(botItem === 'scissors') return scissorsFun
        if(botItem === 'lizard') return lizardFun
        else return spockFun
      } else {
        if(botItem === 'rock') return rock
        if(botItem === 'paper') return paper
        if(botItem === 'scissors') return scissors
        if(botItem === 'lizard') return lizard
        else return spock
      }
    }
  }

  return (
    <div 
      className={`item-wrapper ${!timer && userLose ? 'win' : ''}`}
    >
      <div className="game-item--playing game-item d-flex justify-content-center align-items-center">
        {
          timer > 0 ? <span className="timer">{ timer }</span> 
          : <img src={itemImg()} alt=""/>
        }
      </div>
    </div>
  );
}

export default GameItemBot;
