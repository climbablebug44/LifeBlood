var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

const {get_one, insert_one} = require('../database/db_utils');

const CLIENT_ID = "800856205553-351o7icho2859rhvnsoltva3r4ek1c6c.apps.googleusercontent.com";

let db;

router.post('/google', async (req, res) => {
	const {token} =  req.body;

	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: CLIENT_ID,
	});

	const { name, email } = ticket.getPayload();
	const verified = true;

	let first_time = true;
	let result = await get_one(db, 'users', { email });
	if(result != null)
	{
		first_time = false;
	}
	else
		result = await insert_one(db, 'users', { email, name, verified });
	if(result != null)
	{
		const userId = first_time ? result.insertedId.toString() : result._id.toString();
		console.log('Auth with google, user_id:', userId);
		const jwttoken = jwt.sign(
			{
				email,
				userId,
			},
			'secret',
			{expiresIn: '1w'}
		);

		res.status(200).json({ token, userId, userName: name, email , first_time});
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
