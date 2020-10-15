Feature: Registro_Usuario
  Everybody wants to know when it's Friday

Scenario: El invitado se registra llenando los datos de forma correcta
    Given El invitado esta en el formulario de registro
    When Hace clic en el boton guardar
    Then El usuario obtiene el mensaje "Satisfactorio" 
