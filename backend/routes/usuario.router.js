const express=require('express');
const router=express.Router();
const usuario=require('../controller/usuario.controller');

router.post('/agregar',usuario.postUsuario);
module.exports=router;