const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema(
    {
        identificacion: {
            type: String,
            required: true,
            unique: true
        },

        username: {
            type: String,
            required: true,
            unique: true
        },

        correo: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },

        isDisennador:{
            type: Boolean,
            required: true,
            default: false
        }
    }, { timestamps: true }
);
const usuario = model('usuario', usuarioSchema);
module.exports = model(' usuario;', usuarioSchema);