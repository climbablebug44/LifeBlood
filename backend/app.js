const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const { DB_URL } = require('./backend_api_key.json');
const connectToDB = require('./database/connectToDB');

const app = express();
const port = process.env.PORT || 4000;
//const DB_URL = "mongodb+srv://backend_user:backenddbuser@login-credentials.dv01o.mongodb.net/LifeBlood?retryWrites=true&w=majority"; 
//const DB_URL = "mongodb://localhost:27017/LifeBlood";

const LOC_API = '/api';
const LOC_LOGIN = LOC_API + '/login';
const LOC_FEED = LOC_API + '/feed';
const LOC_SIGN_UP = LOC_API + '/signup';
const LOC_CHECK_USER = LOC_API + '/check_user';
const LOC_LOG_OUT = LOC_API + '/log_out';
const LOC_VERIFY = LOC_API + '/verify';
const LOC_RESET_PASSWORD = LOC_API + '/resetpassword';
const LOC_AUTH = LOC_API + '/auth';
const LOC_DETAILS_FORM = LOC_API + '/DetailsForm';
const LOC_PROFILE = LOC_API + '/profile';
const LOC_DONOR_FORM = LOC_API + '/donorform';
const LOC_SEND_NUMBER = LOC_API + '/shareNumber'
const LOC_EXPERIENCE = LOC_API + '/experience';
const path = require("path");


let db;

function set_routes() {
	const router_check_user = require('./check_user.js');
	const router_login = require('./login/login')(db);
	const router_feed = require('./feed/feed')(db);
	const router_sign_up = require('./sign_up/sign_up')(db);
	const router_log_out = require('./log_out/log_out');
	const router_verify = require('./verify/verify.js')(db);
	const router_reset_password = require('./reset_password/reset_password.js')(db);
	const router_auth = require('./auth/google.js')(db);
	const router_details_form = require('./details_form/details_form.js')(db);
	const router_profile = require('./profile/profile.js')(db);
	const router_donor_form = require('./donor_form/donor_form')(db);
	const router_send_number = require('./shareNumber/shareNumber')(db);
	const router_experience = require('./experience/experience.js');

	app.use(express.static('public'));
	app.use(cors());

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(cookieParser('secret'));

	app.use(LOC_CHECK_USER, router_check_user);
	app.use(LOC_LOGIN, router_login);

	app.use(LOC_SIGN_UP, router_sign_up);
	app.use(LOC_LOG_OUT, router_log_out);

	app.use(LOC_FEED, router_feed);
	app.use(LOC_VERIFY, router_verify);
	app.use(LOC_RESET_PASSWORD, router_reset_password);
	app.use(LOC_AUTH, router_auth);
	app.use(LOC_DETAILS_FORM, router_details_form);
	app.use(LOC_PROFILE, router_profile);
	app.use(LOC_DONOR_FORM, router_donor_form);
	app.use(LOC_SEND_NUMBER, router_send_number);
	app.use(LOC_EXPERIENCE, router_experience);

	app.use(express.static(path.join(__dirname, "lifeblood", "build")))

	// ...
	// Right before your app.listen(), add this:
	app.get("*", (req, res) => {
		res.sendFile(path.join(__dirname, "lifeblood", "build", "index.html"));
	});
}

; (async function () {
	try {
		db = await connectToDB(DB_URL);
		set_routes();
		app.listen(port, () => {
			console.log(`App listening at http://localhost:${port}`);
		})
	}
	catch (err) {
		console.log('ERROR:', err);
	}
})();


