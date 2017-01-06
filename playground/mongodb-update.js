const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp' ,(error,db) =>{
    if (error){
        return console.log('Unable to connect to MongoDb Server');
    }
    console.log('Connected to MongoDb Server');

    //findOneAndUpdate
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("586fe05adee478a9bfa849bd")
    },{
        $set:{
            name: 'Marta'
        },
        $inc:{
            age: 1
        }
    }, {
        returnOriginal : false
    }).then((results) => {
        console.log(results);
    });

    //db.close();
});

