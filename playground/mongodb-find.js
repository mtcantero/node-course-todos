const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(error,db) =>{
    if (error){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').find({
    //     _id: new ObjectID('586eb850ef0ffbb6def9e631') }).toArray().then((docs) => {
    //     console.log('Todos List');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Error : ', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos count' + count);
    //     //console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Error : ', err);
    // });

    // db.collection('Users').find({
    //     name : 'Mario'
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (error) =>{
    //     console.log('Unable to find Users, ', error);
    // } );

    //db.close();
});