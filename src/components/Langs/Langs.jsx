import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Dropdown, DropdownButton, ButtonGroup} from 'react-bootstrap';
import './Langs.scss';
import engIcon from '../../assets/eng-icon.svg'
import ruIcon from '../../assets/rus-icon.svg'

import '../../locales/locales';
import { useTranslation } from 'react-i18next';

const Langs = () => {
  const { t, i18n } = useTranslation();
  const [langImg, setLangImg] = useState(engIcon)
  function handleClick(lang) {
    i18n.changeLanguage(lang);
    lang === 'en' ? setLangImg(engIcon) : setLangImg(ruIcon)
  }
  console.log(t)
  return (
    <div className="langs">
      <img src={`${langImg}`} width="30" alt="" />
      <DropdownButton
        as={ButtonGroup}
        title=""
      >
        <Dropdown.Item eventKey="1" onClick={() => handleClick('en')}>English</Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={() => handleClick('ru')}>Russian</Dropdown.Item>
      </DropdownButton>   
    </div>
  );
};

export default Langs;
