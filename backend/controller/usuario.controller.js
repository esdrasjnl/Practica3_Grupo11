const usuarioCtrl = {};
const mysqldb = require('../database');

usuarioCtrl.postUsuario = async function (req, res, next) {

    if (req.body.user_name === undefined || req.body.correo === undefined || req.body.clave === undefined || req.body.nombre === undefined || req.body.apellido === undefined
        || req.body.cui === undefined || req.body.edad === undefined || req.body.ref_id_tipo === undefined) {
        return res.json({ 'Msg': 'Faltan Datos' });
        //console.log(req.body.carnet);
    } else {

        const validacion = `select count(*) from usuario where correo = '${req.body.correo}' and user_name = '${req.body.user_name}' and cui = ${req.body.cui}`;

        var existeDato = 0;

        mysqldb.connection.query(validacion, function (err, results) {
            if (err) {
                throw err;
            }
            //console.log(results);
            existeDato = results;
        });

        if (existeDato === '0') {
            const sql = 'insert into usuario set?';
            const UsuarioObj = {
                user_name: req.body.user_name,
                correo: req.body.correo,
                clave: req.body.clave,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                cui: req.body.cui,
                edad: req.body.edad,
                ref_id_tipo: req.body.ref_id_tipo
            };

            mysqldb.connection.query(sql, UsuarioObj, error => {
                if (error) throw error;
                //res.send('Usuario Creado');
                res.json({ 'estado': 'true' });
            });
        } else {
            res.json({ 'estado': 'Datos Repetidos' });
        }
    }

}

module.exports = usuarioCtrl;