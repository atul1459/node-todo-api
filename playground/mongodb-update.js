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
  
  // FindOne & Update
  db.collection('ToDos').findOneAndUpdate({
    _id:new ObjectID('5c650c53174f6d6de86a140a')
    },{
      $set:{
        city:'Kolkata'
      }
    },{
      returnOriginal:false
    }).then((result)=>{
    console.log(result);
  });
})();