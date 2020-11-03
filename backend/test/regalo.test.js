const assert = require("assert");
const request = require("supertest");
const regalo = require("../routes/regalo.router");
var express = require("express");
const { response } = require("express");
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

describe("Express regalo", async() => {
    /*  
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
      });*/
    it("TestRegaloDateNoValido post request /agregar", (done) => {
        request(app.use(regalo))
            .post("/agregar")
            .send({ "fechaRegalo": "2020", "usuarioEmisor": "5", "usuarioReceptor": "3" })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TestRegaloParameterVacio request /agregar", (done) => {
        request(app.use(regalo))
            .post("/agregar")
            .send({ "fechaRegalo": "2020", "usuarioEmisor": " ", "usuarioReceptor": " " })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TestRegaloParameterDateVacio request /agregar", (done) => {
        request(app.use(regalo))
            .post("/agregar")
            .send({ "fechaRegalo": " ", "usuarioEmisor": "5", "usuarioReceptor": "3" })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TestRegaloDataNoVali request /agregar", (done) => {
        request(app.use(regalo))
            .post("/agregar")
            .send({ "fechaRegalo": "n", "usuarioEmisor": "n", "usuarioReceptor": "nm" })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    //--------------------------------------------------------------
    //------------------------pruebas detalleRegalo----------------
    //-----------------------------------------------------------------
    it("TestDetalleRegalo request /agregar", (done) => {
        request(app.use(regalo))
            .post("/agregar/detalle")
            .send({ "usuarioEmisor": "3", "cantidad": "5", "pkgRCard": "1" })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TestDetalleRegaloVacio request /agregar/detalle", (done) => {
        request(app.use(regalo))
            .post("/agregar/detalle")
            .send({ "usuarioEmisor": " ", "cantidad": " ", "pkgRCard": " " })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TestDetalleRegaloParametroNoValid request POST /agregar/detalle", (done) => {
        request(app.use(regalo))
            .post("/agregar/detalle")
            .send({ "usuarioEmisor": "df", "cantidad": "sdf", "pkgRCard": "dfs" })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TestDetalleRegaloParametromenor0 request POST /agregar/detalle", (done) => {
        request(app.use(regalo))
            .post("/agregar/detalle")
            .send({ "usuarioEmisor": "3", "cantidad": "-5", "pkgRCard": "1" })
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            })
    });
    //pruebas unitarias para la lista de compras que el usuario ha adquirido
    it("TestListBuyUsers request GET /:idUser", (done) => {
        request(app.use(regalo))
            .get("/:")
            .send("2")
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TEstListBuyUserDatInvalid request GET /:idUser", (done) => {
        request(app.use(regalo))
            .get("/:")
            .send("ng")
            .expect(200)
            .end((err, res) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    //-------------------pruebas de visualizacion de rgalo a receptor--------
    it("TestListRegalo request GET /receptor/:userReceptor", (done) => {
        request(app.use(regalo))
            .get("/receptor/:")
            .send("5")
            .expect(200)
            .end((err, result) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it("TestListRegaloParemeterNoValido request GET /receptor/:userReceptor", (done) => {
        request(app.use(regalo))
            .get("/receptor/:")
            .send("xd")
            .expect(200)
            .end((err, result) => {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
});