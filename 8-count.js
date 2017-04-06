//8 COUNT
const mongo = require('mongodb').MongoClient;
const dbName = 'learnyoumongo';
const collectionName = 'parrots';

const compAge = parseInt(process.argv[2]);

const url = 'mongodb://localhost:27017/' + dbName;
mongo.connect(url, function(err, db) {
    if (err)
        throw err;
    const collection = db.collection(collectionName);
    collection.count({
        age: {
            $gt: compAge
        }
    }, function(err, count) {
        if (err)
            throw err;
        console.log(count);
        db.close();
    });
});
