const inventario = require('../modelBd/entity/Inventario');   

/**
 * @description Función que permite consultar los inventarios
 * @creation David Villanueva 05/01/2020
 * @update
 */
exports.consultarInventario = async function (oFiltro) { 
    const oResponse = {};
    try {
        var oFiltroLista = {}; 
        oFiltroLista.where ={}; 
        if(oFiltro.sNumeroDocumento !== undefined){
            oFiltroLista.where.NumeroDocumento  = oFiltro.sNumeroDocumento; 
        } 
        if(oFiltro.iId !== undefined){
            oFiltroLista.where.Id  = oFiltro.iId; 
        }  
        oFiltroLista.where.EstadoId     = 1;  
        const consultarListaResponse = await  inventario.findAll(oFiltroLista); 
        if(consultarListaResponse.length > 0){
            oResponse.iCode     = 1;
            oResponse.sMessage  = 'OK'; 
            oResponse.oData     = consultarListaResponse;
        }else{
            oResponse.iCode     = 2;
            oResponse.sMessage  = 'No se encontro información de inventario'; 
            oResponse.oData     = oFiltro;
        }
    } catch (e) { 
        oResponse.iCode     = -1;
        oResponse.sMessage  = 'Ocurrio un error en la tabla: inventario, error: '+ e.message;
        oResponse.oData     = oFiltro;
    }  
    return oResponse;
}