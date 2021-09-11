const express = require('express')
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

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/login', (req, res) => {
	//console.log(req.body)
	for(let i = 0;i<users.length;i++)
	{
		if(users[i].username == req.body.username && users[i].password == req.body.password)
		{
			res.send(`Welcome ${users[i].username} <br> Blood Group: ${users[i].blood_group}`);
			
		}
	}
	
	if(!res.headersSent)
		res.send("Username/password invalid")

	//res.send("Got a POST request to /login")
})

app.post('/register', (req, res) => {
	console.log(req.body)
	users.push(req.body)	
	res.send("Registration successful! You can <a href='/login.html'>login</a> now.")
})

app.listen(port, () => {
	console.log(`App listening at http://localhost:${port}`)
})
