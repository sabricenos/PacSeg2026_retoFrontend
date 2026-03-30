//Todos los pasos (Given, When, Then) comparten la misma instancia de la página sin usar variables globales

const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

class CustomWorld extends World {
  async openBrowser() {
    this.browser = await chromium.launch({ headless: false }); // Cambiar a true en CI/CD
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);