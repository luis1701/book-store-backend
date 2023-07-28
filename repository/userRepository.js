const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'book-store';

async function getAllUser(params) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('users');
  return collection.find(params).toArray()
}

async function getUserById(id) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('users');
  const result = await collection.findOne({ _id: new ObjectId(id) })
  console.log(result)
  return result
}

async function createUserDB(data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('users');
  const result = await collection.insertOne(data)
  return result
}

async function updateUserDB(id, data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('users');
  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
  return result
}

async function removeUserById(id) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('users');
  const result = await collection.deleteOne({ _id: new ObjectId(id) })
  return result
}

async function getUserByParams(params) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('users');
  const result = await collection.findOne(params)
  console.log(result)
  return result
}

module.exports = {
  getAllUser,
  getUserById,
  createUserDB,
  updateUserDB,
  removeUserById,
  getUserByParams
}

