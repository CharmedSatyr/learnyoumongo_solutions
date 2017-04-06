//4 FIND PROJECT
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
    }, {
        name: 1,
        age: 1,
        _id: 0
    }).toArray(function(err, matches) {
        if (err)
            throw err;

        console.log(matches); //
        db.close();
    });

});
