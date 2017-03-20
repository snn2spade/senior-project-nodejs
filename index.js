var express = require('express')
var app = express()

var app_config = require('./app_config')

var symbolRouter = require('./controller/symbolController')

app.use('/symbol',symbolRouter)

app.listen(app_config.port,()=>{
  console.log('API server listening on port 3000')
})
