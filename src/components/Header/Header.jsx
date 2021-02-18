import React from 'react';
import Scope from '../Scope/Scope';
import Langs from '../Langs/Langs';
import Rulls from '../Rulls/Rulls';
import LinkToggle from '../LinkToggle/LinkToggle';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.scss'

const Header = ({version, setVersion, score}) => {
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
          <LinkToggle
            setVersion={setVersion}
            version={version}
          />
          <Scope
            score={score}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
