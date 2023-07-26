const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName2 = 'book-users';

async function getAllDBusers() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName2);
  const collection = db.collection('users');
  return collection.find().toArray()
}

async function removeDBusers(id) {
    await client.connect()
    const db = client.db(dbName2)
    const collection = db.collection('users')
    const resultUsers = await collection.deleteOne({ _id: new ObjectId(id) })
    return resultUsers
  }

  async function getByIdDBusers(id) {
    await client.connect();
    const db = client.db(dbName2);
    const collection = db.collection('users');
    const result = await collection.findOne({ _id: new ObjectId(id) })
    console.log(result)
    return result
  }

  
async function createDBusers(data) {
    await client.connect();
    const db = client.db(dbName2);
    const collection = db.collection('users');
    const result = await collection.insertOne(data)
    return result
  }


module.exports= {
    getAllDBusers,
    removeDBusers,
    getByIdDBusers,
    createDBusers
   
}