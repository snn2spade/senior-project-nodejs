var mongoClient = require('mongodb').MongoClient
var app_config = require('../app_config')

getSymbolList = function(callback) {
  mongoClient.connect(app_config.db_url, function(err, db) {
    db.collection('symbol').find().toArray(function(err, docs){
      console.log(docs)
      db.close()
      callback(docs)
    })
  })
}

module.exports = {
  getSymbolList: getSymbolList
}
