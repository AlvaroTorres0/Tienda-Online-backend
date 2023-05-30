const mongoose=require('mongoose');


let Schema= mongoose.Schema;
let nuevoUsuario= new Schema({
    nombre: {type: String},
    apellido: {type: String},
    email: {type:String},
    telefono: {type: String},
    contrasenia: {type: String},
    fotografia: {type: String},
    codigopostal: {type: String},
    estado: {type: String},
    municipio: {type: String},
    colonia: {type: String},
    calleprincipal: {type: String},
    numeroexterior: {type: String},
    numerointerior: {type: String},
    calle1: {type: String},
    calle2: {type: String},
    descripcion: {type: String}
});


module.exports=mongoose.model('usuarios', nuevoUsuario);