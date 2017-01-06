
const expect = require ('expect');
const request = require ('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');


beforeEach ((done) => {
    Todo.remove({}).then(() => {
        done();
    })
});

describe ('POST /todos', () => {

    it('should create new todo', (done) => {
        var text = 'Test todo Text';

        request(app)
        .post('/todos')
        .send({text:text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err,res) => {
            if (err){
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(1);
                expect(todos[0].text).toBe(text);
                done();
            }).catch((e) => {done(e);});
        });
    });

    it('should fail when we send bad data', (done) => {

        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if (err){
                return done(err);
            }

            Todo.find().then((todos) => {
                expect (todos.length).toBe(0);
                done();
            }).catch((e) => {done(e);});
        });

    });

}); 

describe('GET /todos', () => {

    it('should retrieve all todos', (done) => {
        request(app)
        .get('/todos')
        .expect(200)
        .end((err,res) => {
            if (err){
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos).toEqual(res.body.todos);
                done();
            }).catch((e) => {done(e);});
        });
    });
});