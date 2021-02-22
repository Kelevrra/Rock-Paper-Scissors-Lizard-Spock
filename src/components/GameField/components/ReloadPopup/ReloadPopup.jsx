import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import './ReloadPopup.scss'

const ReloadPopup = ({
  version,
  setGameInit,
  setChosenItem,
  timerUp,
  chosenItem,
  botItem,
  score,
  setScore,
  userWin,
  userLose,
  draw
}) => {
  
  const { t } = useTranslation();

  return (
    <div className="reload-popup">

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
          setScore(score + 1)
          }}>{t("play again")}!</button>
        </div>
        : timerUp && userLose ? <div>
        <h1>{t("lose")}!</h1>
        <button className="btn btn-primary" type="button" onClick={() => {
          setGameInit(false)
          setChosenItem('')
          setScore(score - 1)
          }}>{t("play again")}!</button>
        </div> 
        : '' }
    </div>
  );
};

export default ReloadPopup;
