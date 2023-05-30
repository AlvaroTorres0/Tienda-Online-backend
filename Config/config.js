//Conexion a la base de datos
'use strict'

const mongoose = require('mongoose');
//Permite que la aplicacion slaga y haga peticiones a treves de un servidor
const app = require('../Server/index.js');

//Puerto donde se desea correr
const port = 3900;

//Generar promesa globa
mongoose.Promise = global.Promise;

//Hacer conexion a la base de datos
mongoose.connect('mongodb+srv://rigoberto:211ogir4@tiendaonline.sulevlb.mongodb.net/?retryWrites=true&w=majority', {
useNewUrlParser: true})
    .then(() => {
        console.log('Base de datos corriendo');

        //Escuchar el puerto del server
        app.listen(port, () => {
            console.log(`Server corriendo: ${port}`);

        });
    });