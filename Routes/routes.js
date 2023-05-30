const express= require('express');
const app =express();


app.use(require('./productos/routes_productos'));
app.use(require('./usuarios/routes_usuario'));
app.use(require('./compras/routes_compra'));

module.exports=app;