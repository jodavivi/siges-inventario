const inventarioRxDao = require('../dao/InventarioRxDao'); 
const utils 	  	  = require('../utils/utils'); 
 
/**
 * @description Función que permite consultar inventario
 * @creation David Villanueva 04/01/2020
 * @update
 */
exports.consultarInventario = async (req, res) => { 
	 var oResponse			= {};
	 oResponse.oData		= {}; 
     try { 
	 
		 var oFiltroInv 			= {}; 
		 oFiltroInv.iId 	  		= req.query.iId; 
		 var consultarInventarioResponse =  await inventarioRxDao.consultarInventario(oFiltroInv);
		 if(consultarInventarioResponse.iCode !== 1){
			throw new Error(consultarInventarioResponse.iCode + "||" + consultarInventarioResponse.sMessage);
		 }
     	 oResponse.iCode 		= 1; 
		 oResponse.sMessage		= 'OK';
		 oResponse.oData		= consultarInventarioResponse.oData;
     } catch (e) {
        var oError = utils.customError(e);
		if (e.name === 'Error') {
			oResponse.iCode 	= oError.iCode; 
			oResponse.sMessage	= oError.sMessage;
		}else{
			oResponse.iCode 		= -2;
			oResponse.sMessage	= "Ocurrio un error en el proceso: " +  e.message +" ,Ubicación Error: "+oError.sMessage
		} 
     }finally{
     	oResponse.sIdTransaccion =  req.headers.sidtransaccion;
     	oResponse = utils.customResponse(oResponse);
     }  
     res.json(oResponse) 
};
 