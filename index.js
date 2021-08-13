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



//Lectura y parseo del body
app.use( express.json() );


//BASE DE DATOS
dbConection();




//Rutas
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));






app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});