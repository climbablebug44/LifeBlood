const express = require("express");
const { get_one, update_one } = require("../database/db_utils");
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
	
	// Adding message({ feedId, donorId }) to db
	filter = {'_id': new ObjectID(receiverId)};
  var name = user.name
	let push_message = { 
		$push: {
			"messages": { feedId, donorId, name}
		}
	};
	result = await update_one(db, 'users', filter, push_message);
	console.log("result",result);

  client.messages.create({
      body:`${user.name} Wants to donote blood. visit "http://localhost:3000"`,
      from :'+18503671022',
      to:`+916376780265`
  })
  .then(mess=>{
      res.status(200).json({'message':'send'})
      console.log(mess);
  })
  .catch(err=>{
      console.log(err);
  })
  if(user!==null)
  { 
    send_mail({
        to:receiver.email,
        html:`${user.name} wants to donate blood visit: http://localhost:3000`,
        subject:'SomeOne wants to connects You'
    });
  }
})
router.get('/:id',async (req,res)=>{
        let filter = {'_id': new ObjectID(req.params.id)};
        let result = await get_one(db,'users',filter);
        console.log(result.messages);
        res.status(200).json({"messages":result.messages}); 
})
router.post('/123',async (req,res)=>{
  console.log(req.body)
  let filter = {'_id': new ObjectID(req.body.donorId)};
  let filter1 = {'_id':new ObjectID(req.body.userId)}
  let donor = await get_one(db,'users',filter);
  let user = await get_one(db,'users',filter1);
  console.log(user,"hui hui", donor);
  if(donor!==null)
  {
    send_mail({
      to:donor.email,
      html:`${user.phone_number} is the contact number of ${user.name} `,
      subject:'SomeOne wants to connects You'
  });
  res.status(200).json({"message Sent":true});
  }
})
router.get('/delete/:id/:donorId/:feedId/',async (req,res)=>{
  let filter = {'_id': new ObjectID(req.params.id)};
  let result = await get_one(db,'users',filter);
  let new_messages = result.messages.filter(obj=>{
    obj.feedId!=req.params.feedId && obj.donorId!=req.params.donorId
  })
  result = await update_one(db,'users',filter,{$set:{'messages':new_messages}})
  console.log(result);
  res.status(200).json({"messages":new_messages});


})
function sendNumber(_db){
    db = _db;
    return router
}
module.exports = sendNumber;
