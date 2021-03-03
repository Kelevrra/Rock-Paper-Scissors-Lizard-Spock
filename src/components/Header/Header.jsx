import React from 'react';
import Langs from '../Langs/Langs';
import Rulls from '../Rulls/Rulls';
import AudioController from '../AudioController/AudioController';
import Score from '../Score/Score';
import GameModeToggle from '../GameModeToggle/GameModeToggle';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'

const Header = ({
  isVersion,
  setIsVersion,
  score,
  isSoundOn,
  setIsSoundOn,
  setScore
}) => {

  const { t } = useTranslation();
  
  return (
    <header className="header container">
      <div className="header__top">
        <h1 className="title">
          {t('gameTitle')}
        </h1>
        <div className="d-flex align-items-center">
          <Rulls />
          <Langs />
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <GameModeToggle
            setIsVersion={setIsVersion}
            isVersion={isVersion}
          />
          <AudioController
            isSoundOn={isSoundOn}
            setIsSoundOn={setIsSoundOn}
          />
          <Score
            score={score}
            setScore={setScore}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
