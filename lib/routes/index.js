const express = require('express');
const router = express.Router();

const inventarioRxBusiness        = require('../business/InventarioRxBusiness');  
const inventarioTxBusiness        = require('../business/InventarioTxBusiness');  

module.exports = function(){

    //Inventario
    router.post('/', inventarioTxBusiness.registrarInventario); 
    router.put('/:id', inventarioTxBusiness.actualizarInventario); 
    router.delete('/', inventarioTxBusiness.eliminarInventario);  
    router.get('/', inventarioRxBusiness.consultarInventario); 
 
    return router;
}

