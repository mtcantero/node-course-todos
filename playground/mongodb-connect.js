const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(error,db) =>{
    if (error){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false

    // }, (error, result) =>{
    //     if (error){
    //         console.log('Unable to insert the record: ', error);
    //     }

    //     console.log(JSON.stringify(result.ops,undefined, 2))
    // })

    db.collection('Users').insertOne({
        name: 'Mario',
        age: 28,
        location: 'London,England'
    }, (error,result) =>{
        if(error){
            console.log('Unable to insert the record, because of: ', error);
        }

        console.log(result.ops[0]._id.getTimestamp());
    })

    db.close();
});