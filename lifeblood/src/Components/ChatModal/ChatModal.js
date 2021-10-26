import React from 'react';
import Chat from '../Chat/Chat';
import Backdrop from '../Backdrop/Backdrop';
const ChatModal = ()=>{
 return (
     <React.Fragment>
         <Backdrop/>
         <Chat/>
     </React.Fragment>
 );
}
export default ChatModal;