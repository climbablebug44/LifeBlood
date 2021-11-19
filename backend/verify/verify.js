var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectId;

const { get_one, update_one } = require('../database/db_utils');

let db;

router.get('/:user_id/', async (req, res) => {
	
	if(req.params.user_id.length != 24)
	{
		res.status(402).end();
		return;
	}
	console.log(req.params.user_id);
	filter = {'_id': new ObjectID(req.params.user_id)};
	let result = await update_one(db, 'users', filter, { $set: {'verified': true} });
	
	res.redirect('https://lifeblood-synergy.herokuapp.com/login');
	/*
	if(result != null)
		res.;
	else
		res.status(402).end();
	*/

	console.log('result:', result);
	//res.send('done');
});

function verify_user(_db)
{
	db = _db;
	return router;
}

module.exports = verify_user;
