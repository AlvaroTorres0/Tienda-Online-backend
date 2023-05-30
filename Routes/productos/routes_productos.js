const express = require('express');
const model_producto=require('../../Models/producto/newProducto');
const model_users=require('../../Models/usuario/newUsuario');

let app =express();

app.post('/new/producto',(req,res) =>{
    let body = req.body;

    let newSchemaProducto = new model_producto({
        nombre: body.nombre,
        categoria: body.categoria,
        descripcion: body.descripcion,
        precio: body.precio,
        stock: body.stock,
        vendedor: body.vendedor,
        imagenes:body.imagenes
    });

    newSchemaProducto
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


app.get('/one/productos/:id',async (req,res)=> {
    let id =  req.params.id;
    const respuesta = await model_producto.findById(id);
    res.status(200).json({
        ok:true,
        respuesta
    });
});

app.get('/all/productos', async (req,res) => {
   const respuesta = await model_producto.find();
    res.status(200).json({
        ok:true,
        respuesta
    });
});

app.put('/update/productos/:idProducto',async (req,res) => {
    const id = req.params.idProducto;
    const nuevoValor = req.body.nuevoValor;
    const filter = { _id: id }; // Filtrar por el identificador único del documento que deseas modificar
    const update = { $set: { stock: nuevoValor } }; // Especificar la propiedad a modificar y su nuevo valor
    const respuesta = await model_producto.findOneAndUpdate(filter,update,{new:true});

    res.status(200).json({
        ok:true,
        msj:"Actualizado con éxito",
        respuesta
    })
});

app.get('/categorie/productos/:categorie', async(req, res) => {
    const categorie = req.params.categorie;
    const filter = {categoria : categorie};
    const respuesta = await model_producto.find(filter);

    res.status(200).json({
        ok:true,
        respuesta
    });
});


app.get('/all/ventas/oneUser/:idUser', async(req, res) => {
    const id = req.params.idUser;
    const filter = {vendedor : id};
    const respuesta = await model_producto.find(filter)

    res.status(200).json({
        ok:true,
        respuesta
    });
});


module.exports = app;