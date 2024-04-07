const mongoose = require ('mongoose');

const dbConnection = async() => {
    try{
        mongoose.connect(process.env.DB_CONNECTION, {
            autoIndex: true
        });
        console.log('Conexion exitosa a la base de datos.');
    }catch(error){
        console.log(error)
        throw new Error ('Error al conectar con la BBDD');
    }
}
module.exports = {dbConnection};