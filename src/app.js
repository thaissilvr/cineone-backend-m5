//PACKAGES
const express = require('express');
const cors = require('cors');
const app = express();


//CONTROLLER

const roomController = require('./Controller/roomController')
const bd = require('./Infrastructure/sqlitedb')

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

//ROOT
roomController(app, bd)





module.exports = app
