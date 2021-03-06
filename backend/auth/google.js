var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

const {get_one, insert_one} = require('../database/db_utils');
const { GOOGLE_CLIENT_ID, JWT_SECRET } = require('../backend_api_key.json');


let db;

router.post('/google', async (req, res) => {
	if(!req.body.token)
	{
		res.status(422).json({'message':'failed'});
		return ;
	}
	
	const {token} =  req.body;

	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: GOOGLE_CLIENT_ID,
	});

	const { name, email, picture } = ticket.getPayload();
	const verified = true;
	if(!picture)
		picture = "https://lifeblood-synergy.herokuapp.com/default_user_image.jpg";
	let first_time = true;
	let result = await get_one(db, 'users', { email });
	if(result != null)
	{
		first_time = false;
	}
	else
		result = await insert_one(db, 'users', { email, name, "image":picture, verified });
	if(result != null)
	{
		const userId = first_time ? result.insertedId.toString() : result._id.toString();
		const jwttoken = jwt.sign(
			{
				email,
				userId,
			},
			JWT_SECRET,
			{expiresIn: '1w'}
		);

		res.status(200).json({ token, userId, userName: name, email , first_time,picture});
	}
	else
		res.status(402).end();
});

function auth_google(_db)
{
	db = _db;
	return router;
}

module.exports = auth_google;
