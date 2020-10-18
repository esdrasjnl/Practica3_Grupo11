const express=require('express');
const usuarioCtrl = require('../controller/usuario.controller');
const router=express.Router();
const usuario=require('../controller/usuario.controller');

router.post('/agregar',usuario.postUsuario);
<<<<<<< HEAD
router.get('/obtenerMiUsuario', usuarioCtrl.getUsuario);
=======
router.post('/login', usuario.loginUsuario);

>>>>>>> login
module.exports=router;