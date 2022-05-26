const { json } = require('express/lib/response');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const objectId = require('mongodb').ObjectId;

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
async function getInsatisfaccion(){
    const insatisfaccion = 3;
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                .db(DATABASE)
                .collection(SALES)
                .find()
                .toArray();
   return sales.filter(sale => sale.customer.satisfaction < insatisfaccion)
                .map(sale => {
                    return {
                        gender: sale.customer.gender,
                        age: sale.customer.age,
                        email: sale.customer.email,
                        satisfaction: sale.customer.satisfaction
                    } 
                }) 
}

async function getImporteByLocalizacion(location){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                .db(DATABASE)
                .collection(SALES)
                .find({storeLocation: location})
                .toArray();
    return sales.reduce((importeAcumulado, sale)=> 
    importeAcumulado + sale.items.reduce((sumPrice,item) =>  
    sumPrice + (parseFloat(item.price) * item.quantity),0), 0);
}

//sales.reduce((importeAcumulado, sale)=>importeAcumulado + parseFloat(sale.items.price),0);
module.exports = {getAllSales, getSalesId, getVentasFiltradas, getVentasByEmail, getInsatisfaccion, getImporteByLocalizacion};