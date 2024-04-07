const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    identificador: {
        type: String,
        require: true,
        unique: true
    },

    nombre: {
        type: String,
        require: true,
        unique: true
    },

    subCategoria: {
        type: String
    }
});

const categoria = mongoose.model('categoria', categoriaSchema);
module.export = mongoose.model('categoria', categoriaSchema) ;