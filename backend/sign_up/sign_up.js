var express = require('express');
var router = express.Router()

const { insert_one  } = require('../database/db_utils');

let db;

router.post('/', async (req, res) => {
	let name = req.body.name
	let email = req.body.email
	let password = req.body.password
	let blood_group = req.body.blood_group

	result = await insert_one(db, 'users', {'_id': email, email, name, password, blood_group});
	
	if(result != null)
		res.send("Registration successful! You can <a href='/login.html'>login</a> now.");
	else
		res.send("Registration failed. This email is already registered.");
});

function sign_up(_db)
{
	db = _db;
	return router;
}

module.exports = sign_up;
