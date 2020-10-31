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
regaloCtrl.postDetalleRegalo=async function(req,res){
    let {usuarioEmisor,cantidad,pkgRCard}=req.body;
    let pkReg=0;
    let validaParametro=isNaN(cantidad) || isNaN(pkgRCard) || isNaN(usuarioEmisor) || cantidad==' ' || pkgRCard==' ' || usuarioEmisor==' ';
    if(validaParametro){
        return res.json({'estado':'datos no validos'});
    }else{
        //obtener id de reaglo
        const sqlv=`select count(*) as retorno from giffCard where idGCard=${pkgRCard}`;
        mysqldb.connection.query(sqlv,function(err,resultv){
            if(resultv[0].retorno==0){
                return res.json({"estado":"no se encontro tarjeta"})
            }else{
                const sql=`select max(idRegalo) as id from regalo where usuarioEmisor=${usuarioEmisor}`;
                mysqldb.connection.query(sql,function(req,results){
                    pkReg=results[0].id;
                    const sql2=`insert into detalleRegalo values (default, ${cantidad}, ${pkgRCard}, ${pkReg})`;
                    mysqldb.connection.query(sql2,function(error){
                        if (error) throw error;
                        res.json({ 'estado': 'true' });
                    });
                });

            }
        });
    }
}
regaloCtrl.getListBuyForUser= async function(req,res){
    let {iduser}=req.params; //carnet en este caso es id
    let validaParametro=isNaN(iduser) ||iduser==' ';
    if(validaParametro){
        return res.json({"estado":"parametro no valido"});
    }else{
        const sql=`select pkgCard,giffCard.image,nombreTarjeta,cantidad,subtotal,numeroTarjeta 
        from detalleCompra
        INNER JOIN giffCard ON detalleCompra.pkgCard=giffCard.idGCard
        INNER JOIN compras ON detalleCompra.idDetCom=compras.idCompra
        INNER JOIN usuario ON compras.pkUser=usuario.id_usuario
        where pkUser=${iduser}`;
        mysqldb.connection.query(sql,function(err,results){
            return res.json(results);
        });
    }
}
module.exports=regaloCtrl;