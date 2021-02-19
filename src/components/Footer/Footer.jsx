import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer container d-flex justify-content-center">
      <p>Made by <a className="footer-link" href="https://github.com/Kelevrra">Alex Kelevrra</a> with 🤍 2021 for 
      <a className="footer-link-logo" href="https://rs.school/js/"><img src="https://rs.school/images/rs_school_js.svg" width="40" alt=""/></a></p>
    </footer>
  );
}

export default Footer;
