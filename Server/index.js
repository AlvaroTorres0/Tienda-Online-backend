//Server, mantendra la configuracion del servidor

'use strict'
// llamar las librerias de express y body-parser
const bodyParser = require('body-parser');
const express = require('express');

//iniciamos express
const app=express();

//activar cors
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Request-Width, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","GET, POST, OPTIONS, PUT, PATCH, DELETE");
    next();
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(require('../Routes/routes'));

//activar middlewares de express



module.exports=app;