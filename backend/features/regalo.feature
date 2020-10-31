Feature: Regalo_Targeta
  Se utilizo para verificar que el regalo de las targetas sea correcto

Scenario: El usuario necestita saver si su reagalo fue realizado correctamente
    Given El invitado selecciona las targetas que desea regalar 
    When Se confirma a traves de clic en el boton que procede a regalar
    Then El usuario transfiere sus tarjetas de regalo "Transaccion_Regalo_Correcta" 