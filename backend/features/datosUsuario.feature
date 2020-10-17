Feature: Datos_Usuario
  Se utilizo para verificar el usuario registre sus datossss

Scenario: El usuario previamente registrado solocita los datos 
    Given El usuario esta en la base de datos
    When Accede al endpoint que provee sus datos
    Then El usuario obtiene sus datos "Los datos de usuario coinciden" 
 
