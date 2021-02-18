import React from 'react';
// import HelperPopUp from '../HelperPopUp/HelperPopUp'
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GameItem.scss';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const GameItem = ({item}) => {
  const { t } = useTranslation();
  return (
    <div className="item-wrapper">
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">{t('Beating')}: {t(`rullsHelper.${item}.beat`)}</Tooltip>}>
        <button className="game-item">{item}</button>
      </OverlayTrigger>
    </div>
  );
}

export default GameItem;
