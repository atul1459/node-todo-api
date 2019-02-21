const expect=require('expect');
const request=require('supertest');

const {app}=require('./../server');
const {Todo}=require('./../models/todo');

beforeEach((done)=>{
    Todo.deleteOne({}).then(()=>done());
});

describe('POST /todos',()=>{
    it('It should create a new Todo',(done)=>{
        var text='Test todo text';
    
        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res)=>{
            expect(res.body.text).toBe(text);
        })
        .end((err,res)=>{
            if(err){
                return done(err);
            }
    
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
    
        });
    });

    it('It should not  create a new Todo with Invalid Data',(done)=>{
        // var text='Test todo text';
    
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        // .expect((res)=>{
        //     expect(res.body.text).toBe(text);
        // })
        .end((err,res)=>{
            if(err){
                return done(err);
            }
    
            Todo.find().then((todos)=>{
                expect(todos.length).toBe(0);
                // expect(todos[0].text).toBe(text);
                done();
            }).catch((e)=>done(e));
    
        });
    });
});