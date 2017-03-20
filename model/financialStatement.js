var mongoClient = require('mongodb').MongoClient
var app_config = require('../app_config')

getFinancialPosition = function(symbol,callback) {
  mongoClient.connect(app_config.db_url, function(err, db) {
    symbol = symbol.toUpperCase()
    db.collection('financial_position_yearly').findOne({symbol_name:symbol},(err,doc)=>{
      db.close()
      console.log(doc)
      callback(doc)
    })
  })
}

getComIncome = function(symbol,callback) {
  mongoClient.connect(app_config.db_url, function(err, db) {
    symbol = symbol.toUpperCase()
    db.collection('comprehensive_income_yearly').findOne({symbol_name:symbol},(err,doc)=>{
      db.close()
      console.log(doc)
      callback(doc)
    })
  })
}

getCashFlow = function(symbol,callback) {
  mongoClient.connect(app_config.db_url, function(err, db) {
    symbol = symbol.toUpperCase()
    db.collection('cash_flow_yearly').findOne({symbol_name:symbol},(err,doc)=>{
      db.close()
      console.log(doc)
      callback(doc)
    })
  })
}

module.exports = {
  getFinancialPosition,
  getComIncome,
  getCashFlow
}
