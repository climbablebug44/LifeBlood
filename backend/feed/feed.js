var express = require('express');
var router = express.Router()

const { get_all, insert_one, update_one } = require('../database/db_utils');

let db;
let user_lat=0, user_long=0;

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

//This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
function calcCrow(lat1, lon1, lat2, lon2) 
{
	var R = 6371; // km
	var dLat = toRad(lat2-lat1);
	var dLon = toRad(lon2-lon1);
	var lat1 = toRad(lat1);
	var lat2 = toRad(lat2);

	var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c;
	return d;
}

// Converts numeric degrees to radians
function toRad(Value) 
{
	return Value * Math.PI / 180;
}

function compare_by_distance(a, b)
{
	let c = calcCrow(user_lat, user_long, a.geometry.coordinates[0], a.geometry.coordinates[1]);
	let d = calcCrow(user_lat, user_long, b.geometry.coordinates[0], b.geometry.coordinates[1]);

	if(c < d)
		return -1;
	else if(c > d)
		return 1;
	else
		return 0;
}

router.get('/', async (req, res) => {

	console.log('Get /feed with params:', req.query);
	
	let filter = {} 
	result = await get_all(db, 'feed', filter);	

	if(req.query.lat && req.query.long)
	{
		console.log('Coords detected');
		user_lat = req.query.lat;
		user_long = req.query.long;
		result.sort(compare_by_distance);
		//console.log('------After sorting by distance:------');
		//console.log(result);
	}
	else
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
