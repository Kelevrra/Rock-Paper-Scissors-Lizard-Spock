import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameItemBot.scss';
import gameRulls from '../../../../data/gameRulls'
import rock from '../../../../assets/rock-fun.png'
import paper from '../../../../assets/paper-fun.jpg'
import scissors from '../../../../assets/scissors-fun.jpeg'
import lizard from '../../../../assets/lizard-fun.jpg'
import spock from '../../../../assets/spock-fun.jpg'

const GameItemBot = ({botItem, setTimerUp, setWinner, winner, chosenItem, score, setScore}) => {
  const [timer, setTimer] = useState(3)
  let count = timer > 0 ? setTimeout(() => setTimer(timer - 1), 1000) : setTimerUp(true)
  console.log(count)

  const bg = botItem === 'rock' ? rock 
  : botItem === 'paper' ? paper
  : botItem === 'scissors' ? scissors
  : botItem === 'lizard' ? lizard
  : spock;

  timer === 0 && gameRulls(chosenItem, botItem) === 'win' ? setWinner('win') : setWinner('');

  return (
    <div className={`item-wrapper ${timer === 0 && gameRulls(chosenItem, botItem) === 'lose' ? 'win' : ''}`}>
      <div className="game-item--playing game-item d-flex justify-content-center align-items-center">
        {
          timer > 0 ? <span className="timer">{ timer }</span> 
          : <img src={bg} alt=""/>
        }
      </div>
    </div>
  );
}

export default GameItemBot;
