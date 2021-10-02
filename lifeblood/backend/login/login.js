var express = require('express');
var router = express.Router();

const {get_one} = require('../database/db_utils');

let db;

router.post('/', async (req, res) => {
	
	/*
	console.log(req.signedCookies);
	if(req.hasOwnProperty('signedCookies') && ('username' in req.signedCookies))
	{
		console.log(`Signed in username: ${req.signedCookies.username}`);
		res.redirect('/dashboard');
	}
	*/

	email = req.body.email;
	password = req.body.password;
	filter = {email, password}

	result = await get_one(db, 'users', filter);
	if(result != null)
	{
		html_to_send = 
		`Welcome ${result.email} <br> Blood Group: ${result.blood_group} <br>
		<br> Add a Blood request :- <br>
		<form method="post" action="/api/feed">
			Name: <input type="text" name="name"> <br>
			Blood Group: <input type="text" name="blood_group"> <br>
			<input type="submit" value="Add Request">
		</form>
		`;

		res.cookie('email', result.email, { signed: true });
		res.send(html_to_send);
	}
	else
	{
		res.send('Username/Pasword invalid');
	}
});

function login(_db)
{
	db = _db;
	return router;
}

module.exports = login;
