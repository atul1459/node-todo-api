// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// const assert = require('assert');

// var obj=new ObjectID();
// console.log(obj);

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/myproject';
  // Database Name
  const dbName = 'myproject';
  const client = new MongoClient(url);

  // try {
  //   // Use connect method to connect to the Server
  //   await client.connect();
  //   console.log('Success');

  //   const db = client.db(dbName);
  //   db.collection('ToDos').find().toArray().then((docs)=>{
  //     console.log(JSON.stringify(docs,undefined,2));
  //   },(err)=>{
  //     console.log('Unable to fetch data',err);
  //   });
  // } catch (err) {
  //   console.log(err.stack);
  // }
  // client.close();
  try {
    // Use connect method to connect to the Server
    await client.connect();
    console.log('Success');

    const db = client.db(dbName);
    db.collection('ToDos').find().count().then((count)=>{
      // console.log(JSON.stringify(docs,undefined,2));
      console.log(count);
    },(err)=>{
      console.log('Unable to fetch data',err);
    });
  } catch (err) {
    console.log(err.stack);
  }
})();