var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
	console.log('Cookies: ', req.signedCookies);
	ret = {};
	if(req.signedCookies.email !== undefined)
	{
		ret.status = "logged_in";
		ret.email = req.signedCookies.email;
	}
	else
		ret.status = "not_logged_in";
	//res.send(`Welcome ${req.signedCookies.email} <br> <a href="/">Home</a>`);
	res.json(ret);
});

module.exports = router;
