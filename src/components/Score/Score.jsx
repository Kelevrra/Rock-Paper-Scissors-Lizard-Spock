import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Score.scss';
import { useTranslation } from 'react-i18next';

const Score = ({
  score,
  setScore
}) => {

  useEffect(() => {
    const raw = localStorage.getItem('RPSLSScore') || 0
    setScore(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('RPSLSScore', JSON.stringify(score))
  }, [score])

  const { t } = useTranslation();
  
  return (
      <div className="score">
        <span className="score__title">{t('score')}</span>
        <span className="score__counter">{score}</span>
        {score !== 0 ? <button className="score__button" type="button" onClick={() => setScore(0)}>{t('Reset')}</button>
        : <button className="score__button" type="button"></button>}
      </div>
  );
};

export default Score;
