import React, { useState, useEffect } from 'react';

const Conversation = (props) => {
   const [user, setUser] = useState(null);
   const [conversation, setConversation] = useState();

   useEffect(() => {
      const friendId = props.conversation.member.find((m) !== props.currentUser._id)
      fetch('/api/users' + friendId)
         .then((res) => {
            //console.log(res);
            setConversation(res);
         })
         .catch(err => {
            //console.log(err);
         })
   }, [])
   return (
      <>
         {conversation.map(data => (
            <h3>data</h3>
         ))}
      </>
   );

}
export default Conversation;