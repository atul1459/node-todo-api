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

  try {
    // Use connect method to connect to the Server
    await client.connect();
    console.log('Success');

    const db = client.db(dbName);
    db.collection('ToDos').insertOne({name:'Atul',city:'BLR'},(err,result)=>{
        if(err){
            return console.log('Unable to insert data');
            }
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        });
  } catch (err) {
    console.log(err.stack);
  }
  client.close();
})();