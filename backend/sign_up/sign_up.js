var express = require('express');
var router = express.Router()

const bcrypt = require('bcrypt');
const { get_one, insert_one  } = require('../database/db_utils');
const send_mail = require('../mail/send_mail');

let db;

router.post('/', async (req, res) => {
	
	let name = req.body.name
	let email = req.body.email
	let password = req.body.password
	let blood_group = req.body.bloodGrp
	let pincode = req.body.pincode
	let phone_number = req.body.phoneNumber
	let verified = false
	let image = "https://lifeblood-synergy.herokuapp.com/default_user_image.jpg"
	let result = await get_one(db, 'users', {email});
	if(result != null)
	{
		res.status(402).end();
		return;
	}
	
	bcrypt.hash(password, 1, async (err, hash) => {
		result = await insert_one(db, 'users', {email, name, password: hash, blood_group, pincode, phone_number, verified, image});	

		if(result != null)
		{
			//console.log(result.insertedId.toString());
			const verification_url = 'https://lifeblood-synergy.herokuapp.com/api/verify/' + result.insertedId.toString();
			console.log(verification_url);
			send_mail({
				to: email,
				subject: 'Verify your LifeBlood account',
				html: `Click <a href = '${verification_url}'>here</a> to verify your email.`
			});
			res.status(201).json({'message': 'Registration successful'});
		}
		else
			res.status(402).end();
	});
});

function sign_up(_db)
{
	db = _db;
	return router;
}

module.exports = sign_up;
