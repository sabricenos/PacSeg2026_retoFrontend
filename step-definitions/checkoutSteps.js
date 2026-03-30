const { When, Then } = require('@cucumber/cucumber');
const { InventoryPage } = require('../pages/InventoryPage');

When('agrega el producto {string} al carrito', async function (productName) {
  this.inventoryPage = new InventoryPage(this.page);
  await this.inventoryPage.addItemToCart(productName);
});

//Ingresa al carrito de compras usando la función gotoCart de InventoryPage.js.
When('navega al carrito de compras', async function () {
  await this.inventoryPage.goToCart();
});

//Verifica que el producto esté listado usando la función gotoCart de InventoryPage.js.
Then('el producto {string} debe estar listado', async function (productName) {
  await this.inventoryPage.validateItemInCart(productName);
});

//Usa la función checkoutOverview de InventoryPage.js para ingresar al checkout, llenar los campos y completarlo.
When('completa el proceso de compra con los datos {string}, {string} y {string}', async function (fName, lName, zip) {
  this.inventoryPage = new InventoryPage(this.page);
  
  // PARTE 1: Llegar al Overview
  await this.inventoryPage.checkoutOverview(fName, lName, zip);
  
  // SCREENSHOT 1: Tomamos la foto de la página de "Overview" (checkout-step-two.html)
  const overviewImg = await this.page.screenshot({ fullPage: true });
  await this.attach(overviewImg, 'image/png');

  // PARTE 2: Finalizar la compra
  await this.inventoryPage.completeCheckout();
  
  // SCREENSHOT 2: Tomamos la foto de la página "Complete" (checkout-complete.html)
  const completeImg = await this.page.screenshot({ fullPage: true });
  await this.attach(completeImg, 'image/png');
});
//El sistema muestra el mensaje de confirmación de compra 'Thank you for your order!'.
Then('el sistema debe mostrar el mensaje {string}', async function (expectedMessage) {
  await this.inventoryPage.validatePurchaseSuccess();
});