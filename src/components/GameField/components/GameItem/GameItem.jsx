import React from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './GameItem.scss';
//Pics
import rock from '../../../../assets/rock.svg';
import paper from '../../../../assets/paper.svg';
import scissors from '../../../../assets/scissors.svg';
import lizard from '../../../../assets/lizard.svg';
import spock from '../../../../assets/spock.svg';
import rockFun from '../../../../assets/rock-fun.png';
import paperFun from '../../../../assets/paper-fun.jpg';
import scissorsFun from '../../../../assets/scissors-fun.jpeg';
import lizardFun from '../../../../assets/lizard-fun.jpg';
import spockFun from '../../../../assets/spock-fun.jpg';

const GameItem = ({
  item,
  isVersion,
  isGameInit,
  setGameInit,
  setChosenItem,
  imgPlay,
  isTimerUp,
  userWin 
}) => {

  const { t } = useTranslation();
  const helper = `${t(`rullsHelper.${item}.name`)}! ${t('Beating')}: ${t(`rullsHelper.${item}.beat`)}`;

  const itemPic = () => {
    if(isVersion) {
      if(item === 'rock') return rock
      if(item === 'paper') return paper
      if(item === 'scissors') return scissors
      if(item === 'lizard') return lizard
      else return spock
    } else {
      if(item === 'rock') return rockFun
      if(item === 'paper') return paperFun
      if(item === 'scissors') return scissorsFun
      if(item === 'lizard') return lizardFun
      else return spockFun
    }
  }

  return (
    <div className={`item-wrapper ${isTimerUp && userWin ? 'win' : ''}`}>

     { !isGameInit ? (
       <>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{helper}</Tooltip>}>
          <button
            className={`game-item game-item--active`}
            onClick={() => {
              setGameInit(true)
              setChosenItem(item)
            }}
          >
            <img src={itemPic()} alt={item}/>
          </button>
        </OverlayTrigger>
      </>
     ) : (
        <div className="game-item--playing game-item">
          <img src={imgPlay()} alt=""/>
        </div>
     ) }
    </div>
  );
};

export default GameItem;
