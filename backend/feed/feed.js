var express = require('express');
var router = express.Router()

const { get_all, insert_one, update_one } = require('../database/db_utils');

let db;

function compare(a, b)
{
	const c = a.properties.posted_on || '0';
	const d = b.properties.posted_on || '0';
	if( c.toString() > d.toString() )
		return -1;
	else if( c.toString() < d.toString())
		return 1;
	else
		return 0;
}

router.get('/', async (req, res) => {

	console.log('Get /feed with params:', req.query);
	
	let filter = {} 
	result = await get_all(db, 'feed', filter);	
	result.sort(compare);
	const feed = {'type': 'FeatureCollection', 'features': result };
	res.json(feed);
})

router.get('/:bg', async (req, res) => {

	console.log('Get /feed/:bg with params:', req.params);

	let bg = req.params.bg;
	let blood_group;
	if(bg == 'ap')
		blood_group = 'A+';
	else if(bg == 'bp')
		blood_group = 'B+';
	else if(bg == 'abp')	
		blood_group = 'AB+';
	else if(bg == 'op')
		blood_group = 'O+';
	else if(bg == 'an')
		blood_group = 'A-';
	else if(bg == 'bn')
		blood_group = 'B-';
	else if(bg == 'abn')
		blood_group = 'AB-';
	else if(bg == 'on')
		blood_group = 'O-';

	let filter = {'properties.bloodGrp': blood_group};
	result = await get_all(db, 'feed', filter);
	result.sort(compare);
	const feed = {'type': 'FeatureCollection', 'features': result };
	res.json(feed);
})

router.post('/', async (req, res) => {
	
	console.log('POST TO /feed');
	const { name, age, state, contact, city, bloodGrp, reason, aadhar, pincode, hospital, latitude, longitude, userId } = req.body;
	const data = {};
	data.receiverId = userId;
	data.type = 'Feature';
	data.geometry = { type: 'Point', coordinates: [longitude, latitude] };
	data.properties = { name, age, state, contact, city, bloodGrp, reason, aadhar, pincode, hospital };
	data.properties.posted_on = new Date();

	data_to_send = {}

	result = await insert_one(db, 'feed', {...data} );
	if(result != null)
	{
		data_to_send.status = 'success';
		const feed_id = result.insertedId.toString();
		data_to_send.feed_id = feed_id;
		
		result2 = await update_one(db, 'feed', {'_id': result.insertedId}, { '$set': { 'properties.id': feed_id }});

		res.status(200).json(data_to_send);
	}
	else
		res.status(422).json({status: 'failed'});
	})

function feed(_db)
{
	db = _db;
	return router;
}

module.exports = feed;
