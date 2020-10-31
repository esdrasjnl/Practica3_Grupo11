const usuarioCtrl = {};
const mysqldb = require('../database');
let vari = 0;

usuarioCtrl.postUsuario = async function (req, res, next) {
    let { user_name, correo, clave, nombre, apellido, cui, edad, ref_id_tipo } = req.body;
    console.log(Number.isInteger(vari));
    let parametrosValidos = !user_name || !correo || !nombre || !apellido || isNaN(cui) || isNaN(cui) || !ref_id_tipo;
    if (parametrosValidos) {
        return res.json({ 'Msg': 'Faltan Datos' });
        //console.log(req.body.carnet);
    } else {
        const validacion = `select count(*) as retorno from usuario where correo = '${req.body.correo}' or user_name = '${req.body.user_name}' or cui = ${cui}`;
        //var existeDato = 0;
        mysqldb.connection.query(validacion, function (err, results) {
            if (err) {
                throw err;
            }
            //console.log(results[0]);
            var existeDato = results[0].retorno;
            console.log(existeDato);
            if (parseInt(existeDato) === 0) {
                // const sql = 'insert into usuario set?';
                // const UsuarioObj = {
                //     user_name: req.body.user_name,
                //     correo: req.body.correo,
                //     clave: req.body.clave,
                //     nombre: req.body.nombre,
                //     apellido: req.body.apellido,
                //     cui: req.body.cui,
                //     edad: req.body.edad,
                //     ref_id_tipo: req.body.ref_id_tipo
                // };
                const sql = `insert into usuario values (default, '${req.body.user_name}',
                    '${req.body.correo}',md5('${req.body.clave}'),'${req.body.nombre}','${req.body.apellido}','${req.body.cui}','${req.body.edad}',
                    '${req.body.ref_id_tipo}');`;
                mysqldb.connection.query(sql, error => {
                    if (error) throw error;
                    //res.send('Usuario Creado');
                    res.json({ 'estado': 'true' });
                });
            } else {
                res.json({ 'estado': 'Datos Repetidos' });
            }
        });
    }
}


usuarioCtrl.getUsuario = async function (req, res, next) {
    const { correo } = req.body;
    let parametrosValidos = !correo;
    if (!parametrosValidos) {
        const sql = `select * from usuario where correo = '${correo}'`;
    mysqldb.connection.query(sql, (error, result) => {
        if (error) throw error;
        if (result.length > 0) {
            res.json(result);
        } else {
            res.send('No hay resultados');
        }
    });
    } else {
        res.json({'Msg':'Debe de ingresar un correo'});
    }
}

// router.get('/obtener/:id', (req, res) => {
//     const { id } = req.params;
//     const sql = `select * from usuario where idusuariocle = ${id}`;
//     connection.query(sql, (error, result) => {
//         if(error) throw error;
//         if(result.length > 0){
//             res.json(result);
//         } else {
//             res.send('No hay resultados');
//         }
//     });
// });



usuarioCtrl.loginUsuario = async function (req, res, next) {
    const { user_name, email, clave } = req.body;
    let parametrosValidos = !user_name && !clave || !email && !clave;
    if (!parametrosValidos) {
        const sql = `select * from usuario where user_name = '${user_name}' and clave = md5('${clave}') or correo = 
        '${email}' and clave = md5('${clave}')`;
        mysqldb.connection.query(sql, (error, result) => {
            try {
                if (user_name == "" || clave == "" || email == "") {
                    res.send('No hay resultados');
                } else {
                    if (error) throw error;
                    if (result.length > 0) {
                        res.json(result);
                        /*
                        res.status(201).json({
                            msg: "true",
                        });
                        */
                    } else {
                        res.send('No hay resultados');
                        /*
                        res.status(201).json({
                            msg: "false"
                        });
                        */
                    }
                }
            } catch (error) {
                res.send('Error');
            }
        });
    } else {
        return res.json({ 'Msg': 'Datos insuficientes para el login' });   
    }
}

module.exports = usuarioCtrl;