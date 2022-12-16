const { MongoClient } = require("mongodb");

const db = {};

async function connectToDb() {
  const client = new MongoClient("mongodb://admin:admin@localhost:27017/?authMechanism=DEFAULT");
  await client.connect();
  console.log("db connected");
  const database = client.db("demo");
  db.students = database.collection("students");
}

module.exports = { connectToDb, db };