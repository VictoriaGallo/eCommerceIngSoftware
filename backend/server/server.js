const express = require ('express')
require('dotenv').config()
const { dbConnection } = require('../database/config.js')
const cors = require('cors');

class Server{
    
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {
            auth: '/api/auth',
            task: '/api/task'
        }

        this.connectToDB();
        this.addMiddlewares();
        this.setRoutes();

        //Sockets
        this.sockets();
    }

    //Conectar BBDD
    async connectToDB(){
        await dbConnection();
    }

    addMiddlewares(){
        //CORS
        this.app.use(cors());

        this.app.use(express.json());

        this.app.use(express.static('public'))
    }

    setRoutes(){
        this.app.use(this.paths.auth, require('../routes/auth.js'));
        this.app.use(this.paths.task, require('../routes/task.js'));

    }

    sockets(){
        this.io.on('connect', socket => {
            console.log('Cliente ',socket.id,' conectado');

            socket.on('mensaje-de-cliente', (payload, callback) =>{
                console.log(payload);

                callback('Mensaje recibido');

                payload.from = 'el-server';
                this.io.emit('mensaje-del-server', payload);
            });

            socket.on('disconnect',() => {
                console.log('Cliente ',socket.id,' desconectado');
            });
        });
    }

    listen(){
        this.app.listen(this.port,() =>{
            console.log('Servidor corriendo en puerto:',process.env.PORT)
        });
    }
}

module.exports = Server;