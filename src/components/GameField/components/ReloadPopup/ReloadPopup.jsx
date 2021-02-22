import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './ReloadPopup.scss';
//Audio
import AudioPlay from '../../../AudioPlay/AudioPlay'
import reptile from '../../../../assets/audio/reptile-wins.mp3'
import hah from '../../../../assets/audio/hah.mp3'

const ReloadPopup = ({
  version,
  setGameInit,
  setChosenItem,
  timerUp,
  chosenItem,
  botItem,
  userWin,
  userLose,
  draw,
  soundOn
}) => {
  
  const { t } = useTranslation();

  return (
    <div className="reload-popup">

      { !version && soundOn ? (
        <AudioPlay audio={`${chosenItem === 'lizard' && timerUp && userWin ? reptile 
        : chosenItem === 'lizard' && timerUp && botItem === 'lizard' ? hah
        : timerUp && userWin && botItem === 'lizard' ? hah
        : ''}`} />
      ) : (
        <AudioPlay audio={``} />
      ) }

      { timerUp && draw ? <div>
        <h1>{t("draw")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          }}>{t("play again")}!</button>
      </div>
      : timerUp && userWin ? <div>
        <h1>{t("win")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          }}>{t("play again")}!</button>
        </div>
        : timerUp && userLose ? <div>
        <h1>{t("lose")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          }}>{t("play again")}!</button>
        </div> 
        : '' }
    </div>
  );
};

export default ReloadPopup;
