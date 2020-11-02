const express=require('express');
const compraCtrl = require('../controller/compra.controller');
const router=express.Router();
const compra = require('../controller/compra.controller');

router.post('/agregar', compra.insertaCompra);
router.post('/agregarDetalle',compra.insertaDetalleCompra);

module.exports=router;