'use strict'

/**
 * dependencies
 */
var path = require('path')
var express = require('express')
var config = require('./config')

/**
 * settings
 */
var app = express()
var port = process.env.PORT || config.APP_PORT

/**
 * setup application
 */
app.use(express.static(path.join(__dirname, './dist')))

/**
 * setup server
 */
app.listen(port, function () {
  console.log([ config.APP_NAME, 'Express server started at port', port, 'in', ('"' + process.env.NODE_ENV + '"'), 'mode', '\n' ].join(' '))
})
