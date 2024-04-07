const categoria = require('../models/categoria.js');
//const crearCategoria = require('../controllers/categoria.js').crearCategoria;
const crearCategoria = async (req, res) => {

    try{

        const {nombre} = req.body;
        console.log(nombre);

    } catch (error){
        console.log(error)
        return res.status(400).json(error)
    }


}
module.exports =  { crearCategoria };