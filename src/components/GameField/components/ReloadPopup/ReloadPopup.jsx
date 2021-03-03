import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './ReloadPopup.scss';
//Audio
import AudioPlay from '../../../AudioPlay/AudioPlay';
import reptile from '../../../../assets/audio/reptile-wins.mp3';
import reptileBot from '../../../../assets/audio/f-victory.mp3';
import hah from '../../../../assets/audio/hah.mp3';
import rockWins from '../../../../assets/audio/rock-comback.mp3';
import lose from '../../../../assets/audio/lose.mp3';
import win from '../../../../assets/audio/win.mp3';
import drawSound from '../../../../assets/audio/draw.mp3';
import humans from '../../../../assets/audio/humans.mp3';

const ReloadPopup = ({
  isVersion,
  setGameInit,
  setChosenItem,
  isTimerUp,
  chosenItem,
  botItem,
  userWin,
  userLose,
  draw,
  isSoundOn
}) => {
  
  const { t } = useTranslation();

  const setAudio = () => {
    if(isVersion && isTimerUp && userWin) return win
    if(isVersion && isTimerUp && userLose) return lose
    if(isVersion && isTimerUp && draw) return drawSound
    else {
      if(isTimerUp) {
        if((draw) || (chosenItem === 'paper' && userWin) || (botItem === 'paper' && userLose && chosenItem !== 'spock') || (chosenItem === 'lizard' && userLose)) return hah
        if(chosenItem === 'lizard' && userWin) return reptile
        if((botItem === 'spock' && userLose) || (chosenItem === 'spock' && userLose)) return humans
        if(userLose && botItem === 'lizard') return reptileBot
        if((userWin && chosenItem === 'rock') || (userLose && botItem === 'rock')) return rockWins
        return ''
      }
    }
  }

  return (
    <div className="reload-popup">

      { isTimerUp && draw ? <div>
        <h1>{t("draw")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          }}>{t("play again")}!</button>
      </div>
      : isTimerUp && userWin ? <div>
        <h1>{t("win")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          }}>{t("play again")}!</button>
        </div>
        : isTimerUp && userLose ? <div>
        <h1>{t("lose")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          }}>{t("play again")}!</button>
        </div> 
        : '' }

      { isSoundOn ? (
        <AudioPlay audio={setAudio()} />
      ) : (
        <AudioPlay audio={``} />
      ) }
    </div>
  );
};

export default ReloadPopup;
