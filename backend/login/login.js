var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const {get_one} = require('../database/db_utils');

let db;

router.post('/', async (req, res) => {
		
	//console.log(req.body);

	email = req.body.email;
	password = req.body.password;
	verified = true;

	filter = {email, verified}

	result = await get_one(db, 'users', filter);
	
	if(result != null)
	{
		bcrypt.compare(password, result.password, (err, pmatch) =>
		{
			if(!pmatch)
			{
				res.status(402).end();
				return ;
			}
			const token = jwt.sign(
				{
					email: result.email,
					userId: result._id.toString(),
				},
				'secret',
				{expiresIn: '1w'}
			);
			console.log('200');
			res.status(200).json({token, userId: result._id.toString(), userName: result.name});
		});
	}
	else
	{
		res.status(402).end();
	}
	
});

function login(_db)
{
	db = _db;
	return router;
}

module.exports = login;
