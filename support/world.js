//Todos los pasos (Given, When, Then) comparten la misma instancia de la página sin usar variables globales

const { setWorldConstructor, World } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

class CustomWorld extends World {
  async openBrowser() {
  // process.env.CI es una variable que GitHub Actions activa automáticamente
  const isCI = process.env.CI === 'true';

  this.browser = await chromium.launch({ 
    headless: isCI // Será 'true' en GitHub y 'false' en tu PC
  }); 
  
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