const assert = require("assert");
const request = require("supertest");
const usuarios = require("../routes/usuario.router");
var express = require("express");
const { response } = require("express");
var app = express();
const bodyparser = require('body-parser');
var express = require('express');
var app = express();
var cors = require('cors');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

describe("Express usuarios", async () => {
    it("TEstgetUser POST request /agregar", (done) => {
      request(app.use(usuarios))
        .post("/agregar")
        .send({"user_name": "us1","correo": "us1@gmail.com","clave":"123","nombre": "usuario1","apellido":"users","cui":"7868776","edad":"23","ref_id_tipo":"1"})
        .expect(200)
         .end( (err,res)=>{
         console.log(res.body);
          if (err) {
            done(err);
          }else{
            done();
          }
         });
    });
});