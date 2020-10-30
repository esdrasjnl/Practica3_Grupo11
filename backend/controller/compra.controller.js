const compraCtrl = {};
const mysqldb = require('../database');
const usuarioCtrl = require('./usuario.controller');

compraCtrl.insertaCompra = async function (req, res, next) {
    let { pkUser, numeroTarjeta, nombreTarjeta, fechaExpTarjeta, codigoVeriTarjeta, montoTotal, moneda } = req.body;
    const compraObj = {
        pkUser: req.body.pkUser,
        numeroTarjeta: req.body.numeroTarjeta,
        nombreTarjeta: req.body.nombreTarjeta,
        fechaExpTarjeta: req.body.fechaExpTarjeta,
        codigoVerifTarjeta: req.body.codigoVeriTarjeta,
        montoTotal: req.body.montoTotal,
        moneda: req.body.moneda
    };
    let validaParametro = !pkUser || !moneda || !nombreTarjeta || !fechaExpTarjeta || !!codigoVeriTarjeta || !montoTotal || !numeroTarjeta;
    if (validaParametro) {
        return res.json({ 'estado': 'Datos no validos o Faltan datos' });
    } else {
        const sql = 'insert into compras set?';
        mysqldb.connection.query(sql, compraObj, error => {
            if (error) throw error;
            res.json({ 'estado': 'true' });
        });
    }
}

compraCtrl.insertaDetalleCompra = async function (req, res, next) {
    let { pkUser , subtotal, pkgCard} = req.body;
    let idcompra = 0;
    const sqlorden = `select max(idcompra) as Idcompra from compras where pkUser = ${pkUser }`;
    mysqldb.connection.query(sqlorden, function (req, results) {
        idcompra = results[0].Idcompra;
        console.log(idcompra);
        console.log(subtotal);
        console.log(pkgCard);
        // const detcompraObj = {
        //     subtotal: req.body.subtotal,
        //     pkgCard: req.body.pkgCard,
        //     pkComp: results[0].Idcompra
        // };
        let validaParametro = !subtotal || !pkgCard;
        if (validaParametro) {
            return res.json({ 'estado': 'Datos no validos o Faltan datos' });
        } else {
            const sql = `insert into detalleCompra values (default, ${subtotal}, ${  pkgCard}, ${idcompra})`;
            //const sql = `insert into detalleCompra set ?`;
            //-----------------
            mysqldb.connection.query(sql, error => {
                if (error) throw error;
                res.json({ 'estado': 'true' });
            });
            //-----------------
        }

    });

    /*
    const detcompraObj = {
        subtotal: req.body.subtotal,
        pkgCard: req.body.pkgCard,
        pkComp: idcompra
    };
    let validaParametro = !subtotal || !pkgCard;
    if (validaParametro) {
        return res.json({ 'estado': 'Datos no validos o Faltan datos' });
    } else {
        const sql = 'insert into detalleCompra set?';
        //-----------------
        mysqldb.connection.query(sqlorden, function (req, results) {
            mysqldb.connection.query(sql, detcompraObj, error => {
                if (error) throw error;
                res.json({ 'estado': 'true' });
            });
        });
        //-----------------
    }
    */
}

module.exports = compraCtrl;