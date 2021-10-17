import React from "react";
import Styles from './footer.module.css';
import './icons.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <div className={Styles.row}>
          <div className={Styles.footercol}>
            <h4>company</h4>
            <ul>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>
              <li>
                <Link to="/services">our services</Link>
              </li>
              <li>
                <Link to="/privacypolicy">privacy policy</Link>
              </li>
              <li>
                <Link to="/programs">affiliate program</Link>
              </li>
            </ul>
          </div>
          <div className={Styles.footercol}>
            <h4>get help</h4>
            <ul>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/locations">Locations</Link>
              </li>
              <li>
                <Link to="/">point3</Link>
              </li>
              <li>
                <Link to="/">point4</Link>
              </li>
            </ul>
          </div>
          <div className={Styles.footercol}>
            <h4>Contact us</h4>
            <form className={Styles.emailform}>
              <span>
                <i className="far fa-envelope" aria-hidden="true"></i>
              </span>
              <input type="email" placeholder="jeeteshgaandu69@bsdka.com" required/>
              <button type="submit">
                <i className="fas fa-arrow-right" aria-hidden="true"></i>
              </button>
            </form>
            <div className={Styles.sociallinks}>
              <a href='/'>
                <i className="fab fa-facebook-f" aria-hidden="true"></i>
              </a>
              <a href='/'>
                <i className="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href='/'>
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href='/'>
                <i className="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
