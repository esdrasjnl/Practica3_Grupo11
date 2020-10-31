const compraCtrl = {};
const mysqldb = require('../database');
const router = require('../routes/gifcards.router');
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
    let { pkUser, cantidad, nombreGifCard, recargo, imagenGC, precio, subtotal, estado } = req.body;
    let idcompra = 0;
    const validacion = `select count(*) as retorno, idGCard as retorno2 from giffCard where nombre = '${nombreGifCard}' and image = '${imagenGC}' and precio = '${precio}' group by retorno2`;
    mysqldb.connection.query(validacion, function (err, rows, results) {
        console.log(rows.length);
        if (rows.length === 1) {
            console.log('Registro Compra con detalles');
            const sqlorden = `select max(idcompra) as Idcompra from compras where pkUser = ${pkUser}`;
            mysqldb.connection.query(sqlorden, function (req, results3) {
                idcompra = results3[0].Idcompra;
                console.log(idcompra);
                console.log(subtotal);
                let validaParametro = !subtotal;
                if (validaParametro) {
                    return res.json({ 'estado': 'Datos no validos o Faltan datos' });
                } else {
                    const sql = `insert into detalleCompra values (default, ${cantidad}, ${recargo}, ${subtotal}, ${rows[0].retorno2}, ${idcompra})`;
                    mysqldb.connection.query(sql, error => {
                        if (error) throw error;
                        res.json({ 'estado': 'true' });
                    });
                }
            });
        } else if (rows.length === 0) {

            console.log('Registro de detalles');
            const sql = 'insert into giffCard set?';
            const gCardObj = {
                nombre: req.body.nombreGifCard,
                image: req.body.imagenGC,
                precio: req.body.precio,
                estado: req.body.estado

            };
            mysqldb.connection.query(sql, gCardObj, error => {
                if (error) throw error;
                const validacion = `select count(*) as retorno, idGCard as retorno2 from giffCard where nombre = '${nombreGifCard}' and image = '${imagenGC}' and precio = '${precio}' group by retorno2`;
                mysqldb.connection.query(validacion, function (err, rows, results) {
                    if (rows.length === 1) {
                        console.log('Registro Compra con detalles');
                        const sqlorden = `select max(idcompra) as Idcompra from compras where pkUser = ${pkUser}`;
                        mysqldb.connection.query(sqlorden, function (req, results3) {
                            idcompra = results3[0].Idcompra;
                            console.log(idcompra);
                            console.log(subtotal);
                            let validaParametro = !subtotal;
                            if (validaParametro) {
                                return res.json({ 'estado': 'Datos no validos o Faltan datos' });
                            } else {
                                const sql = `insert into detalleCompra values (default, ${cantidad}, ${recargo}, ${subtotal}, ${rows[0].retorno2}, ${idcompra})`;
                                mysqldb.connection.query(sql, error => {
                                    if (error) throw error;
                                    res.json({ 'estado': 'true' });
                                });
                            }
                        });
                    }
                });
            });
        }

    });
}

module.exports = compraCtrl;