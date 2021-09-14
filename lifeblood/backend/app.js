const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const port = 3000

users = [
	{
		username: "admin",
		password: "1234",
		blood_group: "A+",
	},
]

app.use(express.static('backend/public'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser('secret'))

app.get(

app.get('/dashboard', (req, res) => {
	console.log('Cookies: ', req.signedCookies)
	res.send(`Welcome ${req.signedCookies.username} <br> <a href="/">Home</a>`)
})

app.post('/login', (req, res) => {
	console.log(req.signedCookies)
	
	if(req.hasOwnProperty('signedCookies') && ('username' in req.signedCookies))
	{
		console.log(`Signed in username: ${req.signedCookies.username}`)
		res.redirect('/dashboard')
	}

	for(let i = 0;i<users.length;i++)
	{
		if(users[i].username == req.body.username && users[i].password == req.body.password)
		{
			res.cookie('username', users[i].username, { signed: true })
			res.send(`Welcome ${users[i].username} <br> Blood Group: ${users[i].blood_group}`);
			
		}
	}
	
	if(!res.headersSent)
		res.send("Username/password invalid")
})

app.post('/register', (req, res) => {
	users.push(req.body)	
	res.send("Registration successful! You can <a href='/login.html'>login</a> now.")
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})
