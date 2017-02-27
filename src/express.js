var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname,'../dist')))

app.listen(8082,()=> {
  console.log("server started on 8082")
})


