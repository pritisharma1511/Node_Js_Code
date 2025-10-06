import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost");
await client.connect();

const db = client.db('mongo_nodejs_db');
const userCollection = db.collection("users");

userCollection.insertOne({name :"priti sharma",age : 20});



