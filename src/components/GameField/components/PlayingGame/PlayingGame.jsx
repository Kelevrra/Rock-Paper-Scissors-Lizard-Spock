import React, {useState} from 'react';
import GameItem from '../GameItem/GameItem';
import GameItemBot from '../GameItemBot/GameItemBot';
import ReloadPopup from '../ReloadPopup/ReloadPopup';
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

const PlayingGame = ({gameResult, setGameResult, chosenItem, version, gameInit, setScoreSet, setChosenItem, setGameInit, scoreSet, score, setScore}) => {
  const [timerUp, setTimerUp] = useState(false)
  const variants = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  const [botItem, setBotItem] = useState(variants[Math.floor(Math.random() * variants.length)])

  const imgPlay = chosenItem === '' ? '' 
  : !version && chosenItem !== '' ? (chosenItem === 'rock' ? rockFun
  : chosenItem === 'paper' ? paperFun
  : chosenItem === 'scissors' ? scissorsFun
  : chosenItem === 'lizard' ? lizardFun
  : spockFun) : (chosenItem === 'rock' ? rock
  : chosenItem === 'paper' ? paper
  : chosenItem === 'scissors' ? scissors
  : chosenItem === 'lizard' ? lizard
  : spock);

  return (
    <div className="playing-game d-flex align-items-center justify-content-between">

      <GameItem
        chosenItem={chosenItem}
        botItem={botItem}
        gameInit={gameInit}
        timerUp={timerUp}
        imgPlay={imgPlay}
      />

      <GameItemBot
        version={version}
        chosenItem={chosenItem}
        botItem={botItem} 
        setTimerUp={setTimerUp}
        setScoreSet={setScoreSet}
        scoreSet={scoreSet}
        score={score}
        setScore={setScore}
      />

      <ReloadPopup
        setGameInit={setGameInit}
        setChosenItem={setChosenItem}
        timerUp={timerUp}
        chosenItem={chosenItem}
        botItem={botItem}
        score={score}
        setScore={setScore}
        setGameResult={setGameResult}
      />

    </div>
  );
}

export default PlayingGame;
