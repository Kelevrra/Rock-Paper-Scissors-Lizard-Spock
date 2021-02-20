// eslint-disable-next-line
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import './GameItem.scss';
import gameRulls from '../../../../data/gameRulls';
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

const GameItem = ({ item, version, gameInit, setGameInit, setChosenItem, imgPlay, botItem, chosenItem, timerUp, setScore, score }) => {
  const { t } = useTranslation();

  const itemPic = version ? (item === 'rock' ? rock 
  : item === 'paper' ? paper
  : item === 'scissors' ? scissors
  : item === 'lizard' ? lizard
  : spock) : (item === 'rock' ? rockFun 
  : item === 'paper' ? paperFun
  : item === 'scissors' ? scissorsFun
  : item === 'lizard' ? lizardFun
  : spockFun);

  const helper = `${t(`rullsHelper.${item}.name`)}! ${t('Beating')}: ${t(`rullsHelper.${item}.beat`)}`


  return (
    <div className={`item-wrapper ${timerUp && gameRulls(chosenItem, botItem) === 'win' ? 'win' : ''}`}>

     { !gameInit ? (
       <>
        <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{helper}</Tooltip>}>
          <button
            className={`game-item game-item--active`}
            onClick={() => {
              setGameInit(true)
              setChosenItem(item)

              setTimeout(() => {
                return gameRulls(chosenItem, botItem) === 'win' ? setScore(score + 1) : setScore(score)
              }, 1)
              
            }}
          >
            <img src={itemPic} alt=""/>
          </button>
        </OverlayTrigger>
      </>
     ) : (
        <div className="game-item--playing game-item">
          <img src={imgPlay} alt=""/>
        </div>
     ) }

    </div>
  );
}

export default GameItem;
