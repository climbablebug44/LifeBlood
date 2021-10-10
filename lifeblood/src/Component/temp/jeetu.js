import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
import Button from "../UI/Button";
import Styles from"./jeetu.module.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className={Styles.navbar}>
      <div className={Styles.logo}>
      <img src={logo} alt='Logo' />
      </div>
      <div className={Styles["menu-icon"]} onClick={handleClick}>
        <i className={clicked ? `fas fa-times ${Styles.onn}` : `fas fa-bars ${Styles.off}`}></i>
      </div>
      <ul className={clicked ? Styles["menu-list"] : `${Styles["menu-list"]} ${Styles["close"]}`}>
        <li> <NavLink to="/home" activeClassName={Styles.active}>Home</NavLink></li>
        <li> <NavLink to="/about" activeClassName={Styles.active}>About</NavLink></li>
        <li> <NavLink to="/find" activeClassName={Styles.active}>Find Blood</NavLink></li>
        <li> <NavLink to="/donate" activeClassName={Styles.active}>Donate</NavLink></li>
        <li><Button type='submit'>Register</Button></li>
        <li><Button type='submit'>Login</Button></li>
    </ul>
    </nav>
  );
};

export default Navbar;