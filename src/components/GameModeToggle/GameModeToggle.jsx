import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameModeToggle.scss';

const GameModeToggle = ({
  isVersion,
  setIsVersion
}) => {

  const { t } = useTranslation();
  const btn = isVersion ? `${t('Fun version')} 😈` : t('Back to normal');

  useEffect(() => {
    const raw = localStorage.getItem('RPSLSVersion') || true
    setIsVersion(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('RPSLSVersion', JSON.stringify(isVersion))
  }, [isVersion])

  return (
    <button className="link" type="button" onClick={() => setIsVersion(em => !em)}>
      <span>{btn}</span>
    </button>
  );
};

export default GameModeToggle;
