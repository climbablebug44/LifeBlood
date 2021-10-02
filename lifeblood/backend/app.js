const express = require('express');
const cookieParser = require('cookie-parser');

const connectToDB = require('./database/connectToDB');

const app = express();
const port = 3000;
const DB_URL = 'mongodb://localhost/LifeBlood';

const LOC_API = '/api';
const LOC_CHECK_USER = LOC_API + '/check_user';
const LOC_SIGN_OUT = LOC_API + '/sign_out';
const LOC_LOGIN = LOC_API + '/login';
const LOC_FEED = LOC_API + '/feed';

let db;

async function checkCredentials(email, password)
{
	try
	{
		const result = await db.collection('users').findOne({'email': email, 'password': password });
		return result;
	}
	catch(err)
	{
		console.log('Error in checkCredentials:', err);
	}
}

async function insertUser(name, email, password, blood_group)
{
	try
	{
		const result = await db.collection('users').insertOne({'_id': email, 'name': name, 'email': email, 'password': password, 'blood_group': blood_group});
		return result;
	}
	catch(err)
	{
		console.log('Error in insertUser: ', err);
		return null
	}
}

async function getFeed()
{
	try
	{
		const result = await db.collection('feed').find({}).toArray();
		//console.log(result);
		return result;
	}
	catch(err)
	{
		console.log('Error in getFeed:', err);
		return null;
	}
}

async function addFeed(name, blood_group)
{
	try
	{
		const result = await db.collection('feed').insertOne({'name': name, 'blood_group': blood_group });
		return result;
	}
	catch(err)
	{
		console.log('Error in addFeed:', err);
		return null;
	}
}

function set_routes()
{
	const router_check_user = require('./check_user.js');
	const router_login = require('./login/login')(db);
	const router_feed = require('./feed/feed')(db);

	app.use(express.static('backend/public'));

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser('secret'));

	app.use(LOC_CHECK_USER, router_check_user);
	app.use(LOC_LOGIN, router_login);

	app.get(LOC_SIGN_OUT, (req, res) => {
		res.clearCookie('email');
		res.redirect('/');
	})


	app.post('/register', async (req, res) => {
		name = req.body.name
		email = req.body.email
		password = req.body.password
		blood_group = req.body.blood_group

		result = await insertUser(name, email, password, blood_group);
		
		if(result != null)
			res.send("Registration successful! You can <a href='/login.html'>login</a> now.");
		else
			res.send("Registration failed. This email is already registered.");
	})

	app.use(LOC_FEED, router_feed);
	/*
	app.get('/feed', async (req, res) => {
		result = await getFeed();

		res.json(result);
	})

	app.post('/feed', async (req, res) => {
		name = req.body.name;
		blood_group = req.body.blood_group;
		result = await addFeed(name, blood_group);
		if(result != null)
			res.send('Request added successfully!');
		else
			res.send('Cannot add request!');

	})
	*/
}

;(async function() {
	try
	{
		db = await connectToDB(DB_URL);
		set_routes();
		app.listen(port, () => {
			console.log(`App listening at http://localhost:${port}`);
		})
	}
	catch(err)
	{
		console.log('ERROR:', err);
	}
})();


