const express = require('express');
const cookieParser = require('cookie-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const url = 'mongodb://localhost/LifeBlood';

let db;

async function connectToDB() 
{
	const client = new MongoClient(url, { useNewUrlParser: true });
	await client.connect();
	console.log('Connected to MongoDB at', url);
	db = client.db();
}

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

app.use(express.static('backend/public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser('secret'));


app.get('/dashboard', (req, res) => {
	console.log('Cookies: ', req.signedCookies);
	res.send(`Welcome ${req.signedCookies.email} <br> <a href="/">Home</a>`);
})

app.post('/login', async (req, res) => {
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

	result = await checkCredentials(email, password);
	if(result != null)
	{
		res.cookie('email', result.email, { signed: true });
		res.send(`Welcome ${result.email} <br> Blood Group: ${result.blood_group}`);
	}
	else
	{
		res.send('Username/Pasword invalid');
	}
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

;(async function() {
	try
	{
		await connectToDB();
		app.listen(port, () => {
			console.log(`App listening at http://localhost:${port}`);
		})
	}
	catch(err)
	{
		console.log('ERROR:', err);
	}
})();


