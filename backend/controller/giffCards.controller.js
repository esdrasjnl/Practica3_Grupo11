const gifCtrl = {};
const mysqldb = require('../database');

gifCtrl.postGifCard = async function (req, res, next) {
    let { nombre,imagen, precio, estado } = req.body;
    let parametrosValidos = !nombre || !imagen || !precio || !estado
    if (parametrosValidos) {
        return res.json({ 'Msg': 'Faltan Datos' });
        //console.log(req.body.carnet);
    } else {
        const validacion = `select count(*) as retorno from giffCard where nombre = '${nombre}' and image = '${imagen}' and precio = ${precio};`;
        //var existeDato = 0;
        mysqldb.connection.query(validacion, function (err, results) {
            if (err) {
                throw err;
            }
            var existeDato = results[0].retorno;
            console.log(existeDato);
            if (parseInt(existeDato) === 0) {
                const sql = 'insert into giffCard set?';
                const gCardObj = {
                    nombre: req.body.nombre,
                    image: req.body.imagen,
                    precio: req.body.precio,
                    estado: req.body.estado

                };
                mysqldb.connection.query(sql, gCardObj, error => {
                    if (error) throw error;
                    res.json({ 'estado': 'true' });
                });
            } else {
                res.json({ 'estado': 'Datos Repetidos' });
            }
        });
    }
}

module.exports = gifCtrl;