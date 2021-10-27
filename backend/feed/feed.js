var express = require('express');
var router = express.Router()

const { get_all, insert_one, update_one } = require('../database/db_utils');

let db;

router.get('/', async (req, res) => {
	result = await get_all(db, 'feed');
	console.log(result);
	let feed_arr = [];
	for(i=0;i<result.length;i++)
	{
		feed_arr.push(result[i].data);
	}
	
	const feed = {'type': 'FeatureCollection', 'features': feed_arr };
	console.log('Feed -----');
	console.log(feed);

	res.json(feed);
})

router.post('/', async (req, res) => {
	
	const data = req.body.data;
	data_to_send = {}

	result = await insert_one(db, 'feed', {data} );
	if(result != null)
	{
		data_to_send.status = 'success';
		const feed_id = result.insertedId.toString();
		data_to_send.feed_id = feed_id;
		
		result2 = await update_one(db, 'feed', {'_id': result.insertedId}, { '$set': { 'data.properties.id': feed_id }});

		res.status(200).json(data_to_send);
	}
	else
		res.status(422).json({status: 'failed'});
	/*
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
	*/
})

function feed(_db)
{
	db = _db;
	return router;
}

module.exports = feed;
