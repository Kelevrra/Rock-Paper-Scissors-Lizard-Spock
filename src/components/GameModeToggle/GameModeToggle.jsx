import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameModeToggle.scss';

const GameModeToggle = ({version, setVersion}) => {
  const { t } = useTranslation();
  const btn = version ? `${t('Fun version')} 😈` : t('Back to normal')
  return (
    <button className="link" type="button" onClick={() => setVersion(em => !em)}>
      <span>{btn}</span>
    </button>
  );
}

export default GameModeToggle;
