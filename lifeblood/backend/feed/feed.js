var express = require('express');
var router = express.Router()

const { get_all  } = require('../database/db_utils');

let db;

router.get('/', async (req, res) => {
	result = await get_all(db, 'feed');
	res.json(result);
})

router.post('/', async (req, res) => {
	name = req.body.name;
	blood_group = req.body.blood_group;
	result = await addFeed(name, blood_group);
	if(result != null)
		res.send('Request added successfully!');
	else
		res.send('Cannot add request!');

})

function feed(_db)
{
	db = _db;
	return router;
}

module.exports = feed;
