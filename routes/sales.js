const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    console.log("PASO POR ACA")
    res.json(await controller.getSalesPorId(req.params.id));
    console.log("PASO POR ACA ABAJO")

});

module.exports = router;