var express = require('express')
var router = express.Router()

var fin_statement = require('../model/financialStatement')
// middleware that is specific to this router
router.use(function (req, res, next) {
  console.log(req.method + ":" + req.path)
  next()
})

router.get('/getfinancialpos/yearly/:symbol', function (req, res) {
  fin_statement.getFinancialPosition(req.params.symbol,(docs)=>{
    res.json(docs)
  })
})

router.get('/getcomincome/yearly/:symbol', function (req, res) {
  fin_statement.getComIncome(req.params.symbol,(docs)=>{
    res.json(docs)
  })
})

router.get('/getcashflow/yearly/:symbol', function (req, res) {
  fin_statement.getCashFlow(req.params.symbol,(docs)=>{
    res.json(docs)
  })
})

module.exports = router
