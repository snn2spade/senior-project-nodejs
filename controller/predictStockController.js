var express = require('express')
var router = express.Router()

var predictStock = require('../model/predictStock')
// middleware that is specific to this router
router.use(function (req, res, next) {
  console.log(req.method  + ":" +  req.path)
  next()
})

router.get('/getpredictlist', function (req, res) {
  predictStock.getPredictStockList((docs)=>{
    res.json(docs)
  })
})

module.exports = router
