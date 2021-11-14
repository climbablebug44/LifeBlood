var express = require('express');
var router = express.Router()
var ObjectID = require('mongodb').ObjectId;

const { update_one  } = require('../database/db_utils');

let db;

router.post('/', async (req, res) => {
	console.log(req.body);
	let user_id = req.body.userId;

	if(user_id.length != 24)
	{
		res.status(422).end();
		return;
	}

	const { age, weight, health, checkBox, tattoo, hemoglobin, sexual, std, hiv, drugs, pregnant, medicine } = req.body;
	
	let eligible = false;
	if(health == 'yes' &&
		checkBox.length == 1 &&
		checkBox[0] == 'notSuffering' &&
		tattoo == 'no' &&
		hemoglobin == 'yes' &&
		sexual == 'no' &&
		std == 'no' &&
		hiv == 'no' &&
		drugs == 'no' &&
		pregnant == 'no' &&
		medicine.length == 0	)
	{
		eligible = true;
	}
	

	filter = {'_id': new ObjectID(user_id)};

	let result = await update_one(db, 'users', filter, { $set: {donor_status: {age, weight, health, checkBox, tattoo, hemoglobin, sexual, std, hiv, drugs, pregnant, medicine, eligible}} });	

	if(result != null)
	{	
		res.status(200).json({'eligible': eligible});
	}
	else
		res.status(402).end();
});

function donor_form(_db)
{
	db = _db;
	return router;
}

module.exports = donor_form;
