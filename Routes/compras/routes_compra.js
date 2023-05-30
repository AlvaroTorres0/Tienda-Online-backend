const express = require('express');
const model_compra=require('../../Models/compra/newCompra');

let app =express();

app.post('/new/compra',(req,res) =>{
    let body = req.body;

    let newSchemaCompra = new model_compra({
        idUsuario: body.idUsuario,
        infoCompra: body.infoCompra,
        total: body.total,
        img: body.img,
        fecha: body.fecha
    });

    newSchemaCompra
    .save()
    .then(
        (data)=>{
        return res.status(200)
        .json({
            ok:true,
            message:"Datos guardados",
            data
        });
    })
    .catch((err) =>{
        return res.status(500).json({
            ok:false,
            message:"Datos no guardados",
            data
        });
    });


});


app.get('/all/compras', async (req, res) => {
    const respuesta = await model_compra.find();

    res.status(200).json({
        ok:true,
        respuesta
    });
});

app.get('/all/compras/oneUser/:idUser', async(req, res) => {
    const id = req.params.idUser;
    const filter = {idUsuario : id};
    const respuesta = await model_compra.find(filter)

    res.status(200).json({
        ok:true,
        respuesta
    });
});

module.exports = app;