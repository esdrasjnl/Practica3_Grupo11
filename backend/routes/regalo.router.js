const express=require('express');
const regalo=require('../controller/regalo.controller');
const router =express.Router();


router.post('/agregar',regalo.postRegalo);
//router.post('agregar/detalle',regalo.postDetalleRegalo);
//router.get('/',regalo.getIdrealo);

module.exports=router;
