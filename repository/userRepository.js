const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "book-store";

async function getAllUsersDB(params) {
  await client.connect();
  console.log("Conected succesfully to server");
  const db = client.db(dbName);
  const collection = db.collection("user");
  return collection.find(params).toArray();
}

async function createUserDB(data) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection("user");
  const result = await collection.insertOne(data);
  return result;
}

async function getUserByIdDB(id) {
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('user');
  const result = await collection.findOne({ _id: new ObjectId(id) });
  console.log(result);
  return result;
}

async function updateUserDB(id, data){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('user');
  const result = await collection.updateOne({_id: new ObjectId(id)}, {$set:data});
  return result;
}

async function removeUserDB(id){
  await client.connect();
  const db = client.db(dbName);
  const collection = db.collection('user');
  const result = await collection.deleteOne({_id: new ObjectId(id)});
  return result;
}

module.exports = {
  getAllUsersDB,
  createUserDB,
  getUserByIdDB,
  updateUserDB,
  removeUserDB
}