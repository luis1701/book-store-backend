const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'book-store';

async function getAllDB(params) {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('book');
  return collection.find(params).toArray()
}

async function getByIdDB(id) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('book');
  const result = await collection.findOne({ _id: new ObjectId(id) })
  console.log(result)
  return result
}

async function createDB(data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('book');
  const result = await collection.insertOne(data)
  return result
}

async function updateDB(id, data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('book');
  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
  return result
}

async function removeDB(id) {
  await client.connect()
  const db = client.db(dbName)
  const collection = db.collection('book')
  const result = await collection.deleteOne({ _id: new ObjectId(id) })
  return result
}

module.exports = {
  getAllDB,
  getByIdDB,
  createDB,
  updateDB,
  removeDB
}

