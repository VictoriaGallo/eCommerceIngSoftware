//import path from 'path';
//import express from 'express';
//import dotenv from 'dotenv';
//import categoria from "./routes/categoria.js";

const Server = require('./server/server.js');
const myServer = new Server();

//myServer.listen();

 const express = require ('express')
 require('dotenv').config()
 const { dbConnection } = require('./database/config.js')
 const cors = require('cors');

 const app = express();

// //Conexion con base de datos
 dbConnection();

// // CORS
 app.use(cors());

 app.use(express.static('../frontend'));

// //Lectura y parseo del body
 app.use(express.json());

// // Rutas
 app.use('/api/auth',require('./routes/auth.js'));
app.use('/api/task',require('./routes/task.js'));
app.use('/api/categoria', require('./routes/categoria.js'));

 app.get('/',(req,res) => {
     res.json({
        ok:true
    })
 })

// // Escuchar en puerto 4000
 app.listen(process.env.PORT, () => {
     console.log('Servidor corriendo en puerto:', process.env.PORT)
 })