//3 FIND
//Exercise 3 is the first that requires a program.js file

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/learnyoumongo';
const compAge = parseInt(process.argv[2]);

MongoClient.connect(url, function(err, db) {
    if (err)
        throw err;

    const collection = db.collection('parrots');

    collection.find({
        age: {
            $gt: compAge //$gt means 'greater than'; filtering done
        }
    }).toArray(function(err, matches) {
        if (err)
            throw err;

        console.log(matches); //
        db.close();
    });

});
