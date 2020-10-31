const assert = require("assert");
const request = require("supertest");
const regalo = require("../routes/regalo.router");
var express = require("express");
const { response } = require("express");
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

describe("Express regalo", async () => {
    it("TestPostRegalo POST request /agregar", (done) => {
      request(app.use(regalo))
        .post("/agregar")
        .send({"fechaRegalo":"2020-12-05","usuarioEmisor": "5","usuarioReceptor":"3"})
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
    it("TestRegaloDateNoValido post request /agregar",(done)=>{
      request(app.use(regalo))
      .post("/agregar")
      .send({"fechaRegalo":"2020","usuarioEmisor": "5","usuarioReceptor":"3"})
      .expect(200)
      .end((err,res)=>{
        if(err){
          done(err);
        }else{
          done();
        }
      });
    });
    it("TestRegaloParameterVacio request /agregar",(done)=>{
      request(app.use(regalo))
      .post("/agregar")
      .send({"fechaRegalo":"2020","usuarioEmisor": " ","usuarioReceptor":" "})
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