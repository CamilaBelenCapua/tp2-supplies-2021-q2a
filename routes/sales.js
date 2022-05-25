const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

//CUIDADO SI TENGO DOS GET DONDE LE ENVIO UN PARAMETRO POR POSTMAN, 
//PORQUE POR DEFECTO SIEMPRE ME TOMA EL PRIMERO POR ESO LE AGREGUE
//metodoCompra/:metodoCompra PARA DIFERENCIARLOS

router.get('/:id', async (req, res) => {
    res.json(await controller.getSalesPorId(req.params.id));
});

router.get('/getByPurchaseMethod/:metodoCompra', async (req, res) => {
    res.json(await controller.getByPurchaseMethod(req.params.metodoCompra));
});

router.get('/getByEmail/:email', async (req, res) => {
    res.json(await controller.getByEmail(req.params.email));
});

module.exports = router;