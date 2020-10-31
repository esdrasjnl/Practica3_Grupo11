Feature: Realizar_Pago
  Se utilizo para verificar que el registro sea exitoso

Scenario: El usuario realiza el pago de el carrito de compras
    Given El usuario ingresa a la seccion de pago
    When Hace clic en el boton de pago
    Then El usuario obtiene el mensaje de su compra "Pago_realizado" 