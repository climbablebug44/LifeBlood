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
	console.log(req.body);

	email = req.body.email;
	password = req.body.password;
	filter = {email, password}

	result = await get_one(db, 'users', filter);
	data_to_send = {}
	if(result != null)
	{	
		data_to_send.login_status = 'success';	
		res.cookie('email', result.email, { signed: true });
		data_to_send.redirect_uri = '/';
	}
	else
	{
		data_to_send.login_status = 'failed';
		data_to_send.message = 'Username/Password invalid';	
	}
	res.json(data_to_send);
	
});

function login(_db)
{
	db = _db;
	return router;
}

module.exports = login;
