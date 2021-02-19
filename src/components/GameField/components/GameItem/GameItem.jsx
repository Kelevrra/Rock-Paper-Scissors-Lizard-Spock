// eslint-disable-next-line
import React from 'react';
// import HelperPopUp from '../HelperPopUp/HelperPopUp'
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameItem.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

import rock from '../../../../assets/rock-fun.png'
import paper from '../../../../assets/paper-fun.jpg'
import scissors from '../../../../assets/scissors-fun.jpeg'
import lizard from '../../../../assets/lizard-fun.jpg'
import spock from '../../../../assets/spock-fun.jpg'

const GameItem = ({item, version, gameInit, setGameInit, chosenItem, setChosenItem, bgPlay, winner}) => {
  const { t } = useTranslation();  

  const bg = version ? '' : (item === 'rock' ? rock 
  : item === 'paper' ? paper
  : item === 'scissors' ? scissors
  : item === 'lizard' ? lizard
  : spock);

  return (
    <div
    className={`item-wrapper ${winner}`}
    >
      {chosenItem === '' ? 
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{t(`rullsHelper.${item}.name`)}! {t('Beating')} : {t(`rullsHelper.${item}.beat`)}</Tooltip>}>
        <button
          className="game-item"
          onClick={() => {
            setGameInit(true)
            setChosenItem(item)
          }}
        >
          <img src={bg} alt=""/>
        </button>
      </OverlayTrigger>
      : <div className="game-item--playing game-item">
          <img src={bgPlay} alt=""/>
        </div>
      }
    </div>
  );
}

export default GameItem;
