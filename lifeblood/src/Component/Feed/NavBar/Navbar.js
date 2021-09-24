import React from "react";
import './navbar.css'
// feed here
const NavBar = () => {
    return ( 
        <nav className="navbar">
            <ul>
                <li><h1>Lifeblood</h1></li>
                <li><p>About Us</p></li>
                <li><p>Home</p></li>
                <li><p>FAQ</p></li>
                <li><p>Contact Us</p></li>
            </ul>
        </nav>
     );
}
 
export default NavBar;