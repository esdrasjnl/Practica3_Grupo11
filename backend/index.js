const bodyparser = require('body-parser');
var express = require('express')
var http = require('http');
var app = express();
var cors=require('cors');
var mysqldb =require('./database');
var cors = require('cors');
const PORT = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, ()=>{
    console.log(`Servidor Corriendo en el puerto ${PORT}`);
});

//Route
app.get('/', (req, res)=>{
    res.send('SAOP API');
});

app.use('/api/usuario/',require('./routes/usuario.router'));
app.use('/api/regalo/',require('./routes/regalo.router'));
//Check connect
mysqldb.connect();