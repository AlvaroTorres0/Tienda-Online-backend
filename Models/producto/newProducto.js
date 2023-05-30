const mongoose=require('mongoose');


let Schema= mongoose.Schema;
let nuevoProducto= new Schema({
    nombre: {type:String},
    marca: {type:String},
    categoria: {type: String},
    descripcion: {type: String},
    precio: {type: Number},
    stock: {type: Number},
    vendedor: {type: String},
    imagenes:{type: Object}
});

module.exports=mongoose.model('producto',nuevoProducto);