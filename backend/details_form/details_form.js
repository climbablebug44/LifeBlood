var express = require('express');
var router = express.Router()
var ObjectID = require('mongodb').ObjectId;

const { get_one, update_one  } = require('../database/db_utils');

let db;

router.post('/', async (req, res) => {
	
	let age = req.body.age
	let blood_group = req.body.bloodGrp
	let pincode = req.body.pincode
	let phone_number = req.body.phone
	let user_id = req.body.userId;

	if(user_id.length != 24)
	{
		res.status(422).end();
		return;
	}
	filter = {'_id': new ObjectID(user_id)};

	let result = await update_one(db, 'users', filter, { $set: {age, blood_group, pincode, phone_number} });	

	if(result != null)
	{	
		res.status(200).json({'message': 'success'});
	}
	else
		res.status(402).end();
});

function details_form(_db)
{
	db = _db;
	return router;
}

module.exports = details_form;
