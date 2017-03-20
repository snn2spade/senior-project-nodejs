var mongoClient = require('mongodb').MongoClient
var app_config = require('../app_config')

getHistoricalTrading = function(symbol,limit_amount,callback) {
  mongoClient.connect(app_config.db_url, function(err, db) {
    symbol = symbol.toUpperCase()
    db.collection('historicalTrading').findOne({symbol_name:symbol},(err,doc)=>{
      let data = doc.data.slice(0,limit_amount)
      db.close()
      console.log(data)
      callback(data)
    })
  })
}

module.exports = {
  getHistoricalTrading: getHistoricalTrading
}
