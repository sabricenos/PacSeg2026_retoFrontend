@checkout
Feature: Flujo de compra en Sauce Demo
  Como un usuario estándar
  Quiero agregar productos al carrito y completar el formulario
  Para recibir mi pedido satisfactoriamente

  Background:
    Given que el usuario navega a la página de inicio
    And ingresa el usuario "standard_user" y la contraseña "secret_sauce"

  @smoke
  Scenario: Compra exitosa de un producto
    When agrega el producto "Sauce Labs Backpack" al carrito
    And navega al carrito de compras
    Then el producto "Sauce Labs Backpack" debe estar listado
    When completa el proceso de compra con los datos "Jose", "Perez" y "12345"
    Then el sistema debe mostrar el mensaje "Thank you for your order!"