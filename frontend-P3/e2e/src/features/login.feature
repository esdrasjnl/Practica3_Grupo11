Feature: LOGIN

  Scenario: LOGIN EXITOSO
    Given El usuario desea utilizar la aplicación
    When Ingreso a la pagina de login 
    And Ingreso mi usuario
    And Ingreso mi contraseña
    And Doy click en el boton de ingreso
    Then Me dirige a la pagina principal


  Scenario: LOGIN ERRONEO
    Given El usuario desea utilizar la aplicación
    When Ingreso a la pagina de login 
    And Ingreso mi usuario incorrecto
    And Ingreso mi contraseña inconrrecta
    And Doy click en el boton de ingreso
    Then No reedirige a la pagina principal