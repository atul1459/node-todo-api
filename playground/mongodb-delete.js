const {MongoClient,ObjectID} = require('mongodb');

(async function() {
  // Connection URL
  const url = 'mongodb://localhost:27017/myproject';
  // Database Name
  const dbName = 'myproject';
  const client = new MongoClient(url);
  await client.connect();
  console.log('Success');

  const db = client.db(dbName);
  
  //DeleteMany
// db.collection('ToDos').deleteMany({name:'Atul'}).then((result)=>{
//   console.log(result);
// });
  //DeleteOne
  // db.collection('ToDos').deleteOne({name:'Alex'}).then((result)=>{
  //   console.log(result);
  // });
  
  // FindOne & Delete
  db.collection('ToDos').findOneAndDelete({city:'Mumbai'}).then((result)=>{
    console.log(result);
  });
})();