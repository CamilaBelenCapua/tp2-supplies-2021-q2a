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

module.exports = {getAllSales, getSalesId};