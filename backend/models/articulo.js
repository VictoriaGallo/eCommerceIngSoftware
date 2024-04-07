const {Schema} = require('mongoose');

const articuloSchema = Schema ({
    serial:{
        type: String,
        require: true,
        unique: true
    },
    
    nombre:{
        type: String,
        require: true
    },

    precioUnitario:{
        type: Float,
        require: true
    },

    categoria:{
        type: Schema.Types.ObjectId,
        ref: 'categoria',
        require: true
    },

    stock:{
        type: int,
        require: true
    },

    comentario:{
        type: Schema.Types.ObjectId,
        ref: 'comentario'
    },

    imagen:{
        type: Schema.Types.ObjectId,
        ref: 'imagen',
        require: true
    }
    
});

const articulo = mongoose.model('articulo',articuloSchema);
export default articulo;