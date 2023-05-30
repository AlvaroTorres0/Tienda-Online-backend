const mongoose=require('mongoose');


let Schema= mongoose.Schema;
let nuevaCompra= new Schema({
    idUsuario: {type:String},
    infoCompra: {type:Object},
    total: {type:Number},
    img : {type: String},
    fecha: {type:String}
});

module.exports=mongoose.model('compra',nuevaCompra);