const { json } = require('express/lib/response');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const objectId = require('mongodb').objectId;

async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}


async function getSalesId(id){
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                .db(DATABASE)
                .collection(SALES)
                .find({_id: new objectId(id)})
                .toArray();
    return sale;
}

async function getVentasFiltradas(metodoCompra){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                .db(DATABASE)
                .collection(SALES)
                .find({purchaseMethod: metodoCompra})
                .toArray();
    return sales
}

async function getVentasByEmail(email){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                .db(DATABASE)
                .collection(SALES)
                .find()
                .toArray();
    return sales.filter(sale => sale.customer.email === email);
}

module.exports = {getAllSales, getSalesId, getVentasFiltradas, getVentasByEmail};