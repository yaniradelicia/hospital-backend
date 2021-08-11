require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConection } = require('./database/config');

//mean_user
//nF55PqtqlBbnZ9aI

//crear el servidor de express
const app = express();

//Configurar CORS
app.use( cors() );

//BASE DE DATOS
dbConection();

//Rutas
app.get( '/', (req, res) => {
    res.json({
        ok:true,
        msg:'Hola mundo'
    });
});


app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});