@login
Feature: Autenticación en Sauce Demo
  Como un usuario de Sauce Demo
  Quiero ingresar mis credenciales
  Para poder acceder a la tienda virtual

  Background:
    Given que el usuario navega a la página de inicio

  @smoke
  Scenario Outline: Validación de acceso con diferentes estados de cuenta
    When ingresa el usuario "<usuario>" y la contraseña "<password>"
    Then se valida el resultado del inicio de sesión para el usuario "<usuario>"

    Examples:
      | usuario         | password     |
      | standard_user   | secret_sauce |
      | locked_out_user | secret_sauce |