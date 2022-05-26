const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    try{
        res.json(await controller.getSales());
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

//CUIDADO SI TENGO DOS GET DONDE LE ENVIO UN PARAMETRO POR POSTMAN, 
//PORQUE POR DEFECTO SIEMPRE ME TOMA EL PRIMERO POR ESO LE AGREGUE
//getByPurchaseMethod/:metodoCompra PARA DIFERENCIARLOS

router.get('/getByInsatisfaccion', async (req, res) => {
    try{
        res.json(await controller.getByInsatisfaccion());
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try{
        res.json(await controller.getSalesPorId(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

router.get('/getByPurchaseMethod/:metodoCompra', async (req, res) => {
    try{
        res.json(await controller.getByPurchaseMethod(req.params.metodoCompra));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

router.get('/getByEmail/:email', async (req, res) => {
    try{
        res.json(await controller.getByEmail(req.params.email));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

router.get('/importeTotalByLocalizacion/:location', async (req, res) => {
    try{
        res.json(await controller.getImporteTotalByLocalizacion(req.params.location));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});




module.exports = router;