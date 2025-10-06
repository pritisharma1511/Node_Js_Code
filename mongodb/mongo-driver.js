import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost");
await client.connect();

const db = client.db('mongo_nodejs_db');
const userCollection = db.collection("users");

userCollection.insertOne({name :"priti sharma",age : 20});

//read
// const userCursor = userCollection.find();
// console.log(userCursor);

// for await (const user of userCursor){
//     console.log(user);
// }

// const userCursor = await userCollection.find().toArray();
// console.log(userCursor);

// const user = await userCollection.findOne({name : "priti sharma"});
// console.log(user);
// console.log(user._id.toHexString());

//update
await userCollection.updateOne({name : "priti"},{ $set:{age : 30}});
