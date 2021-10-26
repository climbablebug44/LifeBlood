const { MongoClient } = require('mongodb');

async function connectToDB(DB_URL)
{
	const client = new MongoClient(DB_URL, { useNewUrlParser: true });
	await client.connect();
	console.log('Connected to MongoDB at', DB_URL);
	let db = client.db();
	return db;
}

module.exports = connectToDB;
