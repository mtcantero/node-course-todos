const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(error,db) =>{
    if (error){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then( (result) => {
    //     console.log(result);
    // });
    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // })
    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((result) => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({name: 'Mario' }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('586eb2fec33f1c2c969cf55b')}).then((result) => {
        console.log(result);
    })


    //db.close();
});