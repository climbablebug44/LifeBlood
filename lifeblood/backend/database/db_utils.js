
async function get_one(db, collection_name, filters)
{
	try
	{
		const result = await db.collection(collection_name).findOne(filters);
		return result;
	}
	catch(err)
	{
		console.log('Error in get_one:', err);
	}
}

async function get_all(db, collection_name, filters = {})
{
	try
	{
		const result = await db.collection(collection_name).find(filters).toArray();
		return result;
	}
	catch(err)
	{
		console.log('Error in get_all:', err);
	}
}

async function insert_one(db, collection_name, data)
{
	try
	{
		const result = await db.collection(collection_name).insertOne(data);
		return result;
	}
	catch(err)
	{
		console.log('Error in insert_one:', err);
	}
}

module.exports = {get_one, get_all, insert_one};
