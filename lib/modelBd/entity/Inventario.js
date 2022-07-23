const Sequelize =  require('sequelize');
const db = require('../../config/db'); 
 

const Inventario = db.define('inventario', { 
    Id : {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement : true
    },
    EstadoId            : Sequelize.INTEGER,
    UsuarioCreador      : Sequelize.STRING(64),
    FechaCreacion       : Sequelize.DATE,
    TerminalCreacion    : Sequelize.STRING(64),
    UsuarioModificador  : Sequelize.STRING,
    FechaModificacion   : Sequelize.DATE,
    TerminalModificador : Sequelize.STRING(64),
    TransaccionId       : Sequelize.STRING(64),
    CodEmpresa          : Sequelize.INTEGER, 
    Empresa             : Sequelize.STRING(32),
    CodSede             : Sequelize.INTEGER, 
    Sede                : Sequelize.STRING(64),
    CodAlmacen          : Sequelize.INTEGER, 
    Almacen             : Sequelize.STRING(64),
    MovimientoTipoCod   : Sequelize.STRING(16),
    MovimientoTipo      : Sequelize.STRING(64), 
    NumeroDocumento     : Sequelize.STRING(64),  
    ProductoCod         : Sequelize.STRING(8),
    ProductoCodBarra    : Sequelize.STRING(64), 
    Producto            : Sequelize.STRING(128),   
    Cantidad            : Sequelize.FLOAT, 
    PrecioCostoTotal    : Sequelize.FLOAT 
} 
,
{
    schema: "logistica"
});

 
module.exports = Inventario;