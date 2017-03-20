var express = require('express')
var router = express.Router()

var symbol = require('../model/symbol')
// middleware that is specific to this router
router.use(function (req, res, next) {
  console.log(req.method  + ":" +  req.path)
  next()
})

router.get('/getlist', function (req, res) {
  symbol.getSymbolList((docs)=>{
    res.json(docs)
  })
})

module.exports = router
