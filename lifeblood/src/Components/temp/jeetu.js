import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
import Styles from "./jeetu.module.css";
import Navigation from './Navigation';
import Dropdown from './Dropdown';
import Message from '../../Images/message.png';
const Navbar = (props) => {
  const [clicked, setClicked] = useState(false);
  //const [message, setMessage] = useState([]);
  let message = []
  const [open, setOpen] = useState(false);
  fetch("http://localhost:4000/api/shareNumber/"+localStorage.getItem("userId"))
  .then(res=>{
    return res.json();
  })
  .then(resData=>{
    console.log(resData.messages);
    message.push(resData.messages.map(obj=>{
      return obj;
    }))
    console.log(message);
  })
  .catch(err=>{
    console.log(err);
  })
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
  const handleRead = (donorId,feedId) => {
    fetch(`http://localhost:4000/api/shareNumber/delete/${localStorage.getItem("userId")}/${donorId}/${feedId}`)
    .then(res=>{
      return res.json()
    })
    .then(resData=>{
      console.log(resData);
    })
    
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
              {message.map((n) => displayMessage(n.name))}
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