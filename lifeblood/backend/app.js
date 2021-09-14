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
		//console.log(result);
		return result;
	}
	catch(err)
	{
		console.log('Error in checkCredentials:', err);
	}
}

users = [
	{
		email: "admin",
		password: "1234",
		blood_group: "A+",
	},
];


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
		//console.log('result not null');
		res.cookie('email', result.email, { signed: true });
		res.send(`Welcome ${result.email} <br> Blood Group: ${result.blood_group}`);
	}
	else
	{
		res.send('Username/Pasword invalid');
	}

	/*
	for(let i = 0;i<users.length;i++)
	{
		if(users[i].username == req.body.username && users[i].password == req.body.password)
		{
			res.cookie('username', users[i].username, { signed: true });
			res.send(`Welcome ${users[i].username} <br> Blood Group: ${users[i].blood_group}`);
			
		}
	}
	
	if(!res.headersSent)
		res.send("Username/password invalid");
	*/
})

app.post('/register', (req, res) => {
	users.push(req.body);	
	res.send("Registration successful! You can <a href='/login.html'>login</a> now.");
})

/*
app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`);
})
*/


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


