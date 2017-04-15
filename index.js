var express = require('express')
var app = express()
var bodyParser = require('body-parser');

var app_config = require('./app_config')

var symbolRouter = require('./controller/symbolController')
var historicalTradingRouter = require('./controller/historicalTradingController')
var financialStatementRouter = require('./controller/financialStatementController')
var predictStockRouter = require('./controller/predictStockController')

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/symbol',symbolRouter)
app.use('/historicaltrading',historicalTradingRouter)
app.use('/financialstatement',financialStatementRouter)
app.use('/predictstock',predictStockRouter)

app.listen(app_config.port,()=>{
  console.log('API server listening on port 3000')
})
