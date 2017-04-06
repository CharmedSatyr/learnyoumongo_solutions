//5 INSERT
const mongo = require('mongodb').MongoClient;
const newDoc = {
    firstName: process.argv[2],
    lastName: process.argv[3]
}
const url = 'mongodb://localhost:27017/learnyoumongo';
mongo.connect(url, function(err, db) {
    if (err)
        throw err;

    const collection = db.collection('docs');

    collection.insert(newDoc, function(err, data) {
        if (err)
            throw err;

        console.log(JSON.stringify(newDoc));
        db.close();
    });
});
