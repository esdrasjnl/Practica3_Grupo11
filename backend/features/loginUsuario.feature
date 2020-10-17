 
Feature: Login_Usuario
  Se utilizo para verificar que el Login sea exitoso...

Scenario: El invitado provee sus credenciales
    Given El invitado esta registrado en la base de datos de usuarios
    When Hace clic en el boton Login
    Then El usuario accede a GiftHub "Login" 
