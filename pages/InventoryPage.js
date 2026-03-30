const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    // Selectores de Inventario
    this.inventoryList = page.locator('.inventory_list');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.cartLink = page.locator('.shopping_cart_link');
    
    // Selectores de Carrito/Checkout
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.completeHeader = page.locator('.complete-header');
  }

  async addItemToCart(productName) {
    // Formateamos el nombre para que coincida con el data-test (ej: "Sauce Labs Backpack" -> "add-to-cart-sauce-labs-backpack")
    const formattedName = productName.toLowerCase().replace(/ /g, '-');
    await this.page.locator(`[data-test="add-to-cart-${formattedName}"]`).click();
  }

  async goToCart() {
    await this.cartLink.click();
  }

  async validateItemInCart(productName) {
    const item = this.page.locator('.inventory_item_name', { hasText: productName });
    await expect(item).toBeVisible();
  }

  async checkoutOverview(fName, lName, zip) {
    await this.checkoutButton.click();
    await this.firstNameInput.fill(fName);
    await this.lastNameInput.fill(lName);
    await this.postalCodeInput.fill(zip);
    await this.continueButton.click();
  }

    async completeCheckout() {
    await this.finishButton.click();
  }

  async validatePurchaseSuccess() {
    await expect(this.completeHeader).toContainText('Thank you for your order!');
  }
}

module.exports = { InventoryPage };