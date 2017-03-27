var express = require('express')
var router = express.Router()

var his_trading = require('../model/historicalTrading')
// middleware that is specific to this router
router.use(function (req, res, next) {
  console.log(req.method + ":" + req.path)
  next()
})

router.get('/getlimit/:symbol/:amount', function (req, res) {
  his_trading.getHistoricalTrading(req.params.symbol,req.params.amount,(docs)=>{
    res.json(docs)
  })
})

router.post('/getbysymbollist', function (req, res) {
  console.log(req.body.list)
  his_trading.getLastestHistoricalTradingByList(req.body.list,(docs)=>{
    res.json(docs)
  })
})

module.exports = router
