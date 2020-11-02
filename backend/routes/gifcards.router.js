const express=require('express');
const router=express.Router();
const gifcard = require('../controller/giffCards.controller');

router.post('/agregar', gifcard.postGifCard);

module.exports=router;