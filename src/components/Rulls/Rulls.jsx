import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './Rulls.scss';
import rullsImg from '../../assets/rulls.png';
import { useTranslation } from 'react-i18next';

const Rulls = () => {
  const { t } = useTranslation();
  const [smShow, setSmShow] = useState(false);
  return (
    <div className="rulls">
      <Button onClick={() => setSmShow(true)}>{t('How to play')}</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        className="rulls__modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            {t('Game rulls')}:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="rulls__description">{t('gameTitle')}</p>
          <img className="rulls__img" src={ rullsImg } alt=""/>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Rulls;
