var express = require('express');
var router = express.Router()
var ObjectId = require('mongodb').ObjectId;

const bcrypt = require('bcrypt');
const { get_one, update_one } = require('../database/db_utils');
const send_mail = require('../mail/send_mail');

let db;

router.post('/sendlink', async (req, res) => {
	let email = req.body.email;
	//console.log('/ sendlink called for email:', email);

	let result = await get_one(db, 'users', { email });
	if(result != null)
	{
		const reset_url = 'https://lifeblood-synergy.herokuapp.com/reset/' + result._id;
		//console.log(reset_url);
		send_mail({
			to: result.email,
			subject: 'Reset your LifeBlood Password',
			html: `Click <a href= '${reset_url}'>here</a> to reset your LifeBlood account Pasword.`
		});
	}

	res.status(200).end();

});

router.post('/updatepassword', async (req, res) => {
	if(req.body.token.length != 24)
	{
		res.status(422).end();
		return;
	}

	const userid = req.body.token;
	const password = req.body.password;

	bcrypt.hash(password, 1, async (err, hash) =>
	{
		filter = { '_id': new ObjectId(userid)};
		let result = await update_one(db, 'users', filter, { $set: { 'password': hash } });

		if(result != null)
			res.status(200).json( { "result": "success"} );
		else
			res.status(422).json( { "result": "failed" } );
	});
});

function reset_password(_db)
{
	db = _db;
	return router;
}

module.exports = reset_password;
