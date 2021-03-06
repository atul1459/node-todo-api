const {ObjectID}=require('mongodb');
var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose');
var {Todo}=require('./models/todo');
// var {User}=require('./models/user');

var app=express();
const port=process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
var todo=new Todo({
text: req.body.text
});

todo.save().then((doc)=>{
    res.send(doc);
    },(e)=>{
    res.status(400).send(e);
    });    
});

app.get('/todos',(req,res)=>{
Todo.find().then((todos)=>{
    res.send({todos});
},(e)=>{
    res.status(400).send(e);
});
});

app.get('/todos/:id',(req,res)=>{
var id=req.params.id;
    // res.send(req.params);
    if(!ObjectID.isValid(id)){
       return res.status(404).send();
        // console.log('ID not Valid');
    }
    Todo.findById(id).then((todo)=>{
        if(!todo){
            // return console.log('Id not Found');
        return res.status(404).send();
        }
        res.send({todo});

    // console.log('Todo by Id',todo);
    }).catch((e)=>{
        res.status(400).send();
});
});

app.listen(3000,()=>{
    console.log(`Server Started on port ${port}`);
});

module.exports={app};