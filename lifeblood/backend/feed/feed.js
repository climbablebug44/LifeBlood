var express = require('express');
var router = express.Router()

const { get_all, insert_one } = require('../database/db_utils');

let db;

router.get('/', async (req, res) => {
	result = await get_all(db, 'feed');
	res.json(result);
})

router.post('/', async (req, res) => {
	data_to_send = {}
	if(!req.signedCookies.email)
	{
		data_to_send.status = 'failed';
		data_to_send.message = 'Please Log in first';
		res.json(data_to_send);
		return;
	}

	let name = req.body.name;
	let blood_group = req.body.blood_group;
	let number = req.body.number;
	
	console.log(name, blood_group, number);
	result = await insert_one(db, 'feed', {name, blood_group, number});
	if(result != null)
	{
		data_to_send.status = 'success';
	}
	else
	{
		data_to_send.status = 'failed';
		data_to_send.message = 'Cannot add Request!';
	}
	res.json(data_to_send);

})

function feed(_db)
{
	db = _db;
	return router;
}

module.exports = feed;
