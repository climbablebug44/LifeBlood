const express = require('express');
const cookieParser = require('cookie-parser');

const connectToDB = require('./database/connectToDB');

const app = express();
const port = 3000;
const DB_URL = 'mongodb://localhost/LifeBlood';

const LOC_API = '/api';
const LOC_LOGIN = LOC_API + '/login';
const LOC_FEED = LOC_API + '/feed';
const LOC_SIGN_UP = LOC_API + '/sign_up';
const LOC_CHECK_USER = LOC_API + '/check_user';
const LOC_LOG_OUT = LOC_API + '/log_out';

let db;

function set_routes()
{
	const router_check_user = require('./check_user.js');
	const router_login = require('./login/login')(db);
	const router_feed = require('./feed/feed')(db);
	const router_sign_up = require('./sign_up/sign_up')(db);
	const router_log_out = require('./log_out/log_out');

	app.use(express.static('backend/public'));

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser('secret'));

	app.use(LOC_CHECK_USER, router_check_user);
	app.use(LOC_LOGIN, router_login);

	app.use(LOC_SIGN_UP, router_sign_up);
	app.use(LOC_LOG_OUT, router_log_out);

	app.use(LOC_FEED, router_feed);
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


