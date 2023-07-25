const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'book-store';

async function getAllUsers(params) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');
  return collection.find(params).toArray()
}

async function getUsersById(id){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('user');
  const result = await collection.findOne({ _id: new ObjectId(id)})
  console.log(result)
  return result
}


async function createUser(data){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('user');
  const result = await collection.insertOne(data)
  return result
}

async function updateUser(id, data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('user');
  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
  return result
}

async function removeUsers(id){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('user');
  const result = await collection.deleteOne({ _id: new ObjectId(id)})
  console.log(result)
  return result
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUser,
    updateUser,
    removeUsers
}