const usuarioCtrl = {};
const mysqldb = require('../database');

usuarioCtrl.postUsuario = async function (req, res, next) {
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
}

module.exports = usuarioCtrl;