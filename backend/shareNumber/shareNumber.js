const express = require("express");
const { get_one } = require("../database/db_utils");
require('dotenv').config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN);
const router = express.Router();
let db;
const send_mail = require('../mail/send_mail');
var ObjectID = require('mongodb').ObjectId;
router.post('/',async (req,res)=>{
	console.log(req.body);
  const feedId = req.body.feedId;
  const donorId = req.body.donorId;
	
  filter = {'_id': new ObjectID(feedId)};
  let result = await get_one(db,'feed',filter);
  let user = await get_one(db,'users',{'_id':new ObjectID(donorId)});  
	console.log(user,"user");
  console.log("//");
  console.log(result,"//");
  const receiverId = result.receiverId;
	console.log("revcid: ",receiverId);
  console.log("***");
  let receiver = await get_one(db, 'users', {'_id': new ObjectID(receiverId)});
	console.log('Receiver:', receiver);

  client.messages.create({
      body:`${user.name} Wants to donote blood. visit "http://localhost:3000"`,
      from :'+18503671022',
      to:`+91${user.phone_number}`
  })
  .then(mess=>{
      console.log(mess);
  })
  .catch(err=>{
      console.log(err);
  })
  if(user!==null)
  { console.log("wewe3//")
    send_mail({
        to:user.email,
        html:`${user.name} wants to donate blood visit: http://localhost:3000`,
        subject:'SomeOne wants to connects You'
    });
  }

})
function sendNumber(_db){
    db = _db;
    return router
}
module.exports = sendNumber;
