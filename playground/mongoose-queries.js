const{ObjectID}=require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

var id='5c6e8fe0d97e76e2b4cb5acb';

if(!ObjectID.isValid(id)){
    console.log('ID not Valid');
}

// Todo.find({
//     _id: id
// }).then((todos)=>{
// console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
// console.log('Todo',todo);
// });

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('Id not Found');
    }
console.log('Todo by Id',todo);
}).catch((e)=>console.log(e));