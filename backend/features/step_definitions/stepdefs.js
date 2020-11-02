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


//------------------------- Para la verificacion de datos de usuario ---------------------------
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

//------------------------- Para el Login de usuario ---------------------------
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

//------------------------- Para el Regalo de tarjetas ---------------------------
function funcRegalarTargetas(retorno) {
    if (retorno === "Regalo correcto") {
        return "Transaccion_Regalo_Correcta";
    } else {
        return "Transaccion_Regalo_Erronea";
    }
}

Given('El invitado selecciona las targetas que desea regalar', function() {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.retorno = "Regalo correcto"
});

When('Se confirma a traves de clic en el boton que procede a regalar', function() {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    this.estadoRegalo = funcRegalarTargetas(this.retorno);
});

Then('El usuario transfiere sus tarjetas de regalo {string}', function(retornoEsperado) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(this.estadoRegalo, retornoEsperado);

});