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

//------------------------- Para el Login de usuario -------------------------
function loginExitoso(retorno) {
    if (retorno === "Login Correcto") {
        return "Login";
    } else {
        return "Error de Login";
    }
}

Given('El invitado esta registrado en la base de datos de usuarios', function() {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.retorno = "Login Correcto"
});

When('Hace clic en el boton Login', function() {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.estadoActualLogin = loginExitoso(this.retorno);
});

Then('El usuario accede a GiftHub {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoActualLogin, retornoEsperado);
});