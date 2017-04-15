var mongoClient = require('mongodb').MongoClient
var app_config = require('../app_config')

getHistoricalTrading = function(symbol,limit_amount,callback) {
  mongoClient.connect(app_config.db_url, function(err, db) {
    symbol = symbol.toUpperCase()
    db.collection('historicalTrading').findOne({symbol_name:symbol},(err,doc)=>{
      // console.log(data)
      if(err != null || doc == null){
        callback(null)
      }
      else{
        let data = doc.data.slice(0,limit_amount)
        callback(data)
      }
      db.close()
    })
  })
}

getLastestHistoricalTradingByList = function(symbolList,callback) {
  if(symbolList == null || symbolList.length == 0){
    callback([])
    return
  }
  for(let i=0;i<symbolList.length;i++){
    symbolList[i] = symbolList[i].toUpperCase()
  }
  mongoClient.connect(app_config.db_url, function(err, db) {
      let cursor = db.collection('historicalTrading').find({symbol_name:{$in:symbolList}})
      let res = []
      cursor.forEach((doc)=>{
        res.push(doc.data[0])
      },(err)=>{
        console.log('..prepare for close connection')
        db.close()
        callback(res)
      })
    })
}

module.exports = {
  getHistoricalTrading: getHistoricalTrading,
  getLastestHistoricalTradingByList: getLastestHistoricalTradingByList
}
