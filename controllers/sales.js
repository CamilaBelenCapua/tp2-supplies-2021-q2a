const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalesPorId(id){    
    return sales.getSalesId(id);
}

module.exports = {getSales, getSalesPorId};