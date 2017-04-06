//6 UPDATE
const mongo = require('mongodb').MongoClient;
const dbName = process.argv[2];
const url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err)
        throw err;
    const collection = db.collection('users');
    collection.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function(err, data) {
        if (err)
            throw err;
        db.close();
    });
});
