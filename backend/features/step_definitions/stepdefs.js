const assert = require('assert');
const { Given, When, Then } = require('cucumber');

//------------------------- Para el Registro de usuario -------------------------
function registroExitoso(retorno) {
    if (retorno === "Registrado") {
        return "Satisfactorio";
    } else {
        return "No Satisfactorio";
    }
}

Given('El invitado esta en el formulario de registro', function() {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.retorno = "Registrado"
});

When('Hace clic en el boton guardar', function() {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.estadoActualRegistro = registroExitoso(this.retorno);
});

Then('El usuario obtiene el mensaje {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoActualRegistro, retornoEsperado);
});

//------------------------- Para la verificacion de datos de usuario -------------------------
function verificacionDatos(retornoverfdatos) {
    if (retornoverfdatos === 1) {
        return "Los datos de usuario coinciden";
    } else {
        return "Los datos de usuario no coinciden";
    }
}

Given('El usuario esta en la base de datos', function() {
    // Write code here that turns the phrase above into concrete actions
    this.retorno = 1;
});

When('Accede al endpoint que provee sus datos', function() {
    // Write code here that turns the phrase above into concrete actions
    this.estadoVerfDatos = verificacionDatos(this.retorno);
});

Then('El usuario obtiene sus datos {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoVerfDatos, retornoEsperado);
});