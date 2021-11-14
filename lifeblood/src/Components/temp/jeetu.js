import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
import Styles from "./jeetu.module.css";
import Navigation from './Navigation';
import Dropdown from './Dropdown';
import Message from '../../Images/message.png';
const Navbar = (props) => {
  const [clicked, setClicked] = useState(false);
  const [message, setMessage] = useState([1,2]);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const displayMessage = ({ senderName }) => {
    return (
      <span className="notification">
        {`${senderName} wants to contact you .`}
      </span>
    )
  }
  const handleRead = () => {
    setMessage([]);
    setOpen(false);
  }
  return (
    <nav className={Styles.navbar}>
      <div className={Styles['logo-part']}>
        <NavLink to="/home" activeClassName={Styles.active}><div className={Styles.logo}><img src={logo} alt='Logo for life blood' /></div></NavLink>
        <span className={Styles.lifeblood}>LifeBlood</span>
      </div>
      <div className={Styles["menu-icon"]} onClick={handleClick}>
        <i className={clicked ? `fas fa-times ${Styles.onn}` : `fas fa-bars ${Styles.off}`}></i>
      </div>
      <ul className={clicked ? Styles["menu-list"] : `${Styles["menu-list"]} ${Styles["close"]}`}>
        <li> <NavLink to="/home" activeClassName={Styles.active}>Home</NavLink></li>
        <li> <NavLink to="/about" activeClassName={Styles.active}>About</NavLink></li>
        <li> <NavLink to="/feed" activeClassName={Styles.active}>Find Blood</NavLink></li>
        <li> <NavLink to="/nearby" activeClassName={Styles.active}>NearBy User</NavLink></li>
        <Navigation isAuth={props.isAuth} activeClassName={Styles.active} />
        {props.isAuth && (
          <div className={Styles.icon} onClick={() => setOpen(!open)}>
            <img src={Message} className={Styles.iconImg} alt="" />
            {
              message.length > 0 && <div className={Styles.iconCounter}>{message.length}</div>
            }
          </div>
        )
        }
        {
          props.isAuth && open && (
            <div className="notifications">
              {message.map((n) => displayMessage(n))}
              {
                message.length &&
                <button className={Styles.messageButton} onClick={handleRead}>
                  Mark as read
                </button>
              }

            </div>
          )
        }
        {props.isAuth && <Dropdown onLogout={props.onLogout} />}
      </ul>
    </nav>
  );
};

export default Navbar;