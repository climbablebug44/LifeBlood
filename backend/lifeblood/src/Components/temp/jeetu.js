import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.jpeg'
import Styles from "./jeetu.module.css";
import Navigation from './Navigation';
import Dropdown from './Dropdown';
import Message from '../../Images/message.png';
import ShareContact from "../ShareContact/ShareContact";;
class Navbar extends Component {

  state={
    clicked:false,
    open:false,
    message:[],
    shareContact:false,
    donorId:null,
    feedId:null
  }
  componentDidMount(){
     const token = localStorage.getItem("token")
    
    if(token!==null)
    {
      fetch("/api/shareNumber/"+localStorage.getItem("userId"))
      .then(res=>{
        return res.json();
      })
      .then(resData=>{
        console.log(resData.messages);
        this.setState({
          message:resData.messages.map(obj=>{
            return obj;
          })
        })
        console.log(this.state.message);
      })
      .catch(err=>{
        console.log(err);
      })
  }
  }

  handleClick = () => {
    this.setState({open:!this.state.open});
  };
  displayMessage = ( n ) => {
   // this.setState({feedId:n.feedId,donorId:n.donorId});
    return (
      <span className={Styles.notification} onClick={()=>{ this.setState({shareContact:true,feedId:n.feedId,donorId:n.donorId})}}>
        {n.name +' wants to contact you .'}
      </span>
    )
  }
  messageLoader = (new_messages)=>{
    this.setState({message:new_messages.map(obj=>{
      return obj;
    })})
  }
  closeHandler = () => {
    this.setState({
        ...this.state,
        shareContact: false
    })
}

  handleRead = () => {
    
    
    this.setState({open:false})
  }
  render(){

  return (
    <React.Fragment>
      <nav className={Styles.navbar}>
        <div className={Styles['logo-part']}>
          <NavLink to="/home" activeClassName={Styles.active}><div className={Styles.logo}><img src={logo} alt='Logo for life blood' /></div></NavLink>
          <span className={Styles.lifeblood}>LifeBlood</span>
        </div>
        <div className={Styles["menu-icon"]} onClick={this.handleClick}>
          <i className={this.state.clicked ? `fas fa-times ${Styles.onn}` : `fas fa-bars ${Styles.off}`}></i>
        </div>
        
        <ul className={this.state.clicked ? Styles["menu-list"] : `${Styles["menu-list"]} ${Styles["close"]}`}>
          <li> <NavLink to="/home" activeClassName={Styles.active}>Home</NavLink></li>
          <li> <NavLink to="/about" activeClassName={Styles.active}>About</NavLink></li>
          <li> <NavLink to="/feed" activeClassName={Styles.active}>Find Blood</NavLink></li>
          <li> <NavLink to="/nearby" activeClassName={Styles.active}>NearBy User</NavLink></li>
          <Navigation isAuth={this.props.isAuth} activeClassName={Styles.active} />
          {this.props.isAuth && (
            <div className={Styles.icon} onClick={() => this.setState({open:!this.state.open})}>
            
              <img src={Message} className={Styles.iconImg} alt="" />
              {
                this.state.message.length > 0 && <div className={Styles.iconCounter}>{this.state.message.length}</div>
              }
            </div>
          )
          }
          {
            this.props.isAuth && this.state.open &&  this.state.message.length &&(
              <div className={Styles.notifications}>
                {this.state.message.map((n) => this.displayMessage(n))}
                

              </div>
            )
          }
          {this.props.isAuth && <Dropdown onLogout={this.props.onLogout} />}
        </ul>
      </nav>
      {this.state.shareContact && <ShareContact  handleClose = {this.closeHandler} donorId={this.state.donorId} userId={localStorage.getItem("userId")} feedId={this.state.feedId} messageLoader={this.messageLoader}/>}
      </React.Fragment>
    );
  };
}

export default Navbar;