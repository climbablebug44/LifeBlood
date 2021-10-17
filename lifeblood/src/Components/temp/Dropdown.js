import React,{useRef} from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';
import ProfileImg from '../../Images/Img.png';
const Dropdown = (props)=>{
    const showProfile = useRef();
    const userName = localStorage.getItem("userName");
    const dropDownActive = ()=>{
        showProfile.current.classList.toggle('active');
    }

    return (
        <div className="dropdown_container">
            <div className="dropdown-profile" onClick={dropDownActive}>
                <img src={ProfileImg} alt="user"/>
            </div>
            <div className="dropdown_menu" ref={showProfile}>
                <h3>{userName}</h3>
                <ul>
                    <Link to="/profile"> <li>Profile</li></Link>
                    <Link to="/dashboard"><li>Settings</li></Link>
                    <Link to="/create-post"><li>Requests</li></Link>
                    <li onClick={props.onLogout}>Logout</li>
                </ul>
                <span>LifeBlood</span>
            </div>
        </div>
    );
}
export default Dropdown;