const assert = require("assert");
const request = require("supertest");
const compra = require("../routes/compras.router");
var express = require("express");
const { response } = require("express");
var app = express();
const bodyparser = require('body-parser');
var express = require('express');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


describe("pruebas unitarias para compras", async () => {
    it("TestpotCompra POST request /agregar", (done) => {
      request(app.use(compra))
        .post("/agregar")
        .send({"pkUser": "2","numeroTarjeta":"2131234321234567","nombreTarjeta":"tarjeta1","fechaExpTarjeta": "2020-09-12","codigoVerifTarjeta":"123","montoTotal":"34","moneda":"quetzales"})
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
    it("TesttCompraDatoInvalid request POST /agregar",(done)=>{
      request(app.use(compra))
      .post("/agregar")
      .send({"pkUser": "2","numeroTarjeta":"sd","nombreTarjeta":"tarjeta1","fechaExpTarjeta": "2020-09-12","codigoVerifTarjeta":"123","montoTotal":"34","moneda":"quetzales"})
      .expect(200)
      .end((err,res)=>{
        if(err){
          done(err);
        }else{
          done();
        }
      });
    });
});