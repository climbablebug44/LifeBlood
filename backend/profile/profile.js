var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectId;

const {get_one} = require('../database/db_utils');

let db;

router.post('/', async (req, res) => {
	user_id = req.body.userID;

	filter = {'_id': new ObjectID(user_id)}
	const fields = {_id: 0, password: 0, verified: 0};

	let result = await get_one(db, 'users', filter, fields); //, fields);
	if(result != null)
	{	
		res.status(200).json(result);
	}
	else
	{
		res.status(402).end();
	}
	
});

function profile(_db)
{
	db = _db;
	return router;
}

module.exports = profile;
