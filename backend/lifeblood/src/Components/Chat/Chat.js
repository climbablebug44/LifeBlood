import React,{useState,useEffect} from "react";
import io from 'socket.io-client';
import Messages from '../Messages/Messages';
import InfoBar from '../ChatTextContainer/InfoBar';
import Input from './Input'; 
import TextContainer from "../ChatTextContainer/ChatTextContainer";
import './Chat.css';
let socket;
const Chat = () => {
  const name = localStorage.getItem("userName");
  const [room,setRoom] = useState(''); 
  const [message,setMessage] = useState('');
  const [messages,setMessages] = useState([]);
  const ENDPOINT = 'localhost:4000';
  useEffect(()=>{
    socket = io(ENDPOINT);
    console.log(socket);
    socket.emit('join',{name},(error)=>{
      if(error)
      {
        alert(error);
      }
    });

  },[ENDPOINT])
  useEffect(()=>{
    socket.on('message',message=>{
      setMessages(messages=>[...messages,message]);
    });

  },[messages]);
  const sendMessage = (event)=>{
    event.preventDefault();
    if(message)
    {
      socket.emit('sendMessage',message, ()=> setMessages(''));
    }
  }
  return (
    <div className="chatOuterContainer">
      <div className="chatInnerContainer">
        <InfoBar />
        <Messages messages = {messages} sendMessage = {sendMessage}/>
        <Input message={message} setMessage = {setMessage} sendMessage={sendMessage}/>
      </div>
      
    </div>
  );
};

export default Chat;