const regaloCtrl={};
const mysqldb=require('../database');

regaloCtrl.postRegalo=async function(req,res,next){
    const objetoRegalo={
        fechaRegalo:req.body.fechaRegalo,
        usuarioEmisor:req.body.usuarioEmisor,
        usuarioReceptor:req.body.usuarioReceptor
    }
    let {fechaRegalo,usuarioEmisor,usuarioReceptor}=req.body;
    //--validaciones de parametros 
    let fechaValida=/^\d{2,4}\-\d{1,2}\-\d{1,2}$/    
    let validaParametro=isNaN(usuarioEmisor) || isNaN(usuarioReceptor) || usuarioEmisor==' ' || usuarioReceptor==' ' || !fechaRegalo.match(fechaValida) || fechaRegalo==' ';
    if(validaParametro){
        res.json({"estado":"datos no validos"});
    }else{
        //comienzo a insertar
        const sql='insert into regalo set ?';
        mysqldb.connection.query(sql,objetoRegalo,error =>{
            if(error) throw error;
            res.json({"estado":"true"});
        });
    }
}
module.exports=regaloCtrl;