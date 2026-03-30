const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/LoginPage');

//Navega a la URL usando la función navigate de LoginPage.js.
Given('que el usuario navega a la página de inicio', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

//Cuando el usuario utiliza las credenciales de Examples en el login.feature.
When('ingresa el usuario {string} y la contraseña {string}', async function (user, pass) {
  await this.loginPage.login(user, pass);
});

//Si logra cargar URL/inventory.html entonces el login fue exitoso, sino fue fallido.
//Se ejecutan en órden ambos casos.
Then('se valida el resultado del inicio de sesión para el usuario {string}', async function (user) {
  if (user === 'standard_user') {
  // Validamos éxito
    await this.loginPage.isAtInventory();
    // SCREENSHOT: Página de Productos (inventory.html)
    const img = await this.page.screenshot({ fullPage: true });
    await this.attach(img, 'image/png');
  } else if (user === 'locked_out_user') {
    // Validamos error
    await this.loginPage.checkErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    // SCREENSHOT: Página de Login con el mensaje de error visible
    const img = await this.page.screenshot({ fullPage: true });
    await this.attach(img, 'image/png');
  }
});