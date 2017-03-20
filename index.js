var express = require('express')
var app = express()

var app_config = require('./app_config')

var symbolRouter = require('./controller/symbolController')
var historicalTradingRouter = require('./controller/historicalTradingController')
var financialStatementRouter = require('./controller/financialStatementController')

app.use('/symbol',symbolRouter)
app.use('/historicaltrading',historicalTradingRouter)
app.use('/financialstatement',financialStatementRouter)

app.listen(app_config.port,()=>{
  console.log('API server listening on port 3000')
})
