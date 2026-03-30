//Define que pasa antes y después de cada prueba.

const { Before, After, Status } = require('@cucumber/cucumber');

Before(async function () {
  await this.openBrowser();
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const buffer = await this.page.screenshot();
    await this.attach(buffer, 'image/png');
  }
  await this.closeBrowser();
});