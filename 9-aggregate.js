//9 AGGREGATE
const mongo = require('mongodb').MongoClient;
const dbName = 'learnyoumongo';
const collectionName = 'prices';
const url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
    if (err)
        throw err;
    const collection = db.collection(collectionName);

    collection.aggregate([
        {
            $match: {
                size: process.argv[2] //Select a set of documents in your collection
            }
        }, {
            $group: { //Make a new group object based on that set
                _id: process.argv[2] + '-size', //The new group will have this _id
                avgPrice: { //And have the property avgPrice
                    $avg: '$price' //Which will be the avg of all prices in the set
                }
            }
        }
    ]).toArray(function(err, results) { //Now put that new group into an array
        if (err)
            throw err;
        if (!results.length) {
            throw new Error('No results found');
        }
        console.log(results[0].avgPrice.toFixed(2));
        db.close();
    });
});
