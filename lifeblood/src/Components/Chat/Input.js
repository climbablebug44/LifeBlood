import React from 'react';
import './Input.css';

const Input = ({setMessage,sendMessage,message})=>{
  return (
    <form className="chatForm">
        <input className="chatInput"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange = {({target:{value}})=>setMessage(value)}
        onKeyPress = {event=>event.key==='Enter'?sendMessage(event):null}
        />
        <button className="chatButton" onClick={e=>sendMessage(e)}>Send</button>
    </form>
  );
}
export default Input;