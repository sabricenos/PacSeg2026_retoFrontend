//Indica a Cucumber dónde están los archivos de pasos (step definitions) y cómo ejecutarse.

module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['step-definitions/**/*.js', 'support/**/*.js'],
    format: ['html:reports/cucumber-report.html', 'summary'],
    paths: ['features/**/*.feature'],
    publishQuiet: true
  }
};