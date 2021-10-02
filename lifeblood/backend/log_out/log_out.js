var express = require('express');
var router = express.Router()

router.get('/', async (req, res) => {
	res.clearCookie('email');
	res.redirect('/');
});

module.exports = router;
