const express = require('express');
const model_users=require('../../Models/usuario/newUsuario');
const bcrypt = require('bcryptjs');

let app =express();

app.post('/new/user',(req,res) =>{
    let body = req.body;
    let password = body.contrasenia;
    let saltRounds = 10
    let passwordEncrypt = bcrypt.hashSync(password,saltRounds);

    let newSchemaUsers = new model_users({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        telefono: body.telefono,
        contrasenia: passwordEncrypt,
        fotografia: body.fotografia,
        codigopostal: body.codigopostal,
        estado: body.estado,
        municipio: body.municipio,
        colonia: body.colonia,
        calleprincipal: body.calleprincipal,
        numeroexterior: body.numeroexterior,
        numerointerior: body.numerointerior,
        calle1: body.calle1,
        calle2: body.calle2,
        descripcion: body.descripcion
    });

    newSchemaUsers.save()
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

app.get('/all/users', async (req,res) => {
    const respuesta = await model_users.find();

    res.status(200).json({
        ok:true,
        respuesta
    });
});

app.get('/one/user/:id',async (req,res)=> {
    let id =  req.params.id;
    const respuesta = await model_users.findById(id);
    res.status(200).json({
        ok:true,
        respuesta
    });
});

app.post('/login/user', async (req, res) => {
    let userFound = null;
    let user = null;

    const credentials = {
        email : req.body.email,
        password : req.body.password
    }

    model_users.findOne({ email : credentials.email })
    .exec()
    .then(found => {
        userFound = found;
        if (bcrypt.compareSync(credentials.password, userFound.contrasenia)){
            res.status(200).json({
                ok: "CONTRASEÑAS COINCIDEN",
                userFound
            });
        }else{
            res.status(200).json({
                ok: "CONTRASEÑAS NO COINCIDEN",
                user
            });
        }
    })

    .catch(err =>{
        res.status(200).json({
            ok: "CONTRASEÑAS NO COINCIDEN",
            err
        });
    });
});

app.get('/vendor/productos/:id', async (req, res) => {
    let id = req.params.id;
    const respuesta = await model_users.findById(id);

    res.status(200).json({
        ok:true,
        respuesta
    });
});

app.put('/update/user/:id',async (req,res) => {
    let id = req.params.id;
    const campos = req.body;
    const respuesta = await model_users.findByIdAndUpdate(id,campos,{new:true});

    res.status(200).json({
        ok:true,
        msj:"Actualizado con éxito",
        respuesta
    })
});

module.exports = app;