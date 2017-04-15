var mongoClient = require('mongodb').MongoClient
var app_config = require('../app_config')

getPredictStockList = function(callback) {
  mongoClient.connect(app_config.db_url, function(err, db) {
    db.collection('predict_growth_stock').find().toArray(function(err, docs){
      let res_list = []
      for(let i=0;i<docs.length;i++){
        let symbol = docs[i]['symbol_name']
        let predict = docs[i]['data'][0]['isGrowthStock']
        res_list.push({'symbol_name':symbol,'predict':predict})
      }
      db.close()
      callback(res_list)
    })
  })
}

module.exports = {
  getPredictStockList: getPredictStockList
}
