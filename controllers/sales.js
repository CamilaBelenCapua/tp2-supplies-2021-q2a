const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalesPorId(id){    
    return sales.getSalesId(id);
}

async function getVentas(metodoCompra){    
    return sales.getVentasFiltradas(metodoCompra);
}

module.exports = {getSales, getSalesPorId, getVentas};