import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
import Styles from "./jeetu.module.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

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
        <li className={Styles.bakchodi}><a href='/register' className={Styles['login-register']} >Register</a></li>
        <li className={Styles.bakchodi}><a href='/login' className={Styles['login-register']} >Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;