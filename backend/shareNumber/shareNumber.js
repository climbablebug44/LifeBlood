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
<<<<<<< HEAD
  let receiverId = result.properties.id
  let user = await get_one(db,'users',{'_id':new ObjectID(donorId)});
  console.log(user,"user");
  let user1 = await get_one(db,'users',{'_id':new ObjectID(receiverId)});
  console.log("//");
  console.log(user1,"//");

=======
  let user = await get_one(db,'users',{'_id':new ObjectID(donorId)});  
	console.log(user,"user");
  console.log("//");
  console.log(result,"//");
  const receiverId = result.receiverId;
>>>>>>> 6ed8276a4c0f71d92e74178449bfcfa471911558
	console.log("revcid: ",receiverId);
  console.log("***");
  let receiver = await get_one(db, 'users', {'_id': new ObjectID(receiverId)});
	console.log('Receiver:', receiver);

  client.messages.create({
      body:`${user.name} Wants to donote blood. visit "http://localhost:3000"`,
      from :'+18503671022',
      to:`+918076066296`
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
        to:result.properties.email,
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
