const express = require('express');
const router = express.Router();
//import { crearCategoria, crearCategoria } from '../controllers/categoria.js';
const crearCategoria = require('../controllers/categoria.js').crearCategoria;
router.route('/').post(crearCategoria)

module.exports = router;