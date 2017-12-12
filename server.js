'use strict';

const express = require('express')
const app = express()
const port = process.env.PORT || '3001'
const router = require('./server/routes/routes.js')
const bodyParser = require('body-parser')
// body parser
// cookie parser at some point
app.use(express.static('public'))
app.listen(port, ()=>{
  console.log(`you are now tunned to ${port} "the bees knees"`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)
app.use((req,res,sendit)=>{
  res.sendStatus(506)
})




module.exports = app;
