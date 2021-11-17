import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from "../UI/Button";
const navItems = [
    { id: 'login', text: 'Login', link: '/login', auth: false ,className:'login'},
    { id: 'signup', text: 'Register', link: '/signup', auth: false ,className:'log'}
  ];
  
const Navigation = (props)=>[
    ...navItems.filter(item=>item.auth===props.isAuth).map(fItem=>(
        <li><NavLink to={fItem.link} activeClassName={props.activeClassName}><Button type='submit'>{fItem.text}</Button></NavLink></li>
    ))
      
]  
export default Navigation;