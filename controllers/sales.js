const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalesPorId(id){    
    return sales.getSalesId(id);
}

async function getByPurchaseMethod(metodoCompra){    
    return sales.getVentasFiltradas(metodoCompra);
}

async function getByEmail(email){    
    return sales.getVentasByEmail(email);
}

async function getByInsatisfaccion(){    
    return sales.getInsatisfaccion();
}

async function getImporteTotalByLocalizacion(location){    
    return sales.getImporteByLocalizacion(location);
}



module.exports = {getSales, getSalesPorId, getByPurchaseMethod, getByEmail, getByInsatisfaccion, getImporteTotalByLocalizacion};