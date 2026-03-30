📝 Informe de Estrategia de Automatización

1. Selección de Herramientas
Se seleccionó Playwright debido a que así lo indica el reto, sin embargo presenta ventajas frente a otras alternativas debido a su velocidad nativa, su capacidad de manejar múltiples pestañas/contextos de forma aislada y su robustez ante la asincronía (auto-waiting). Cucumber se integró para facilitar la lectura de los criterios de aceptación por parte de perfiles no técnicos (Product Owners/Stakeholders).

2. Arquitectura: Page Object Model (POM)
Para cumplir con el criterio de "uso apropiado de patrones de diseño", se implementó POM.

Ventaja: Si el desarrollador cambia el ID del botón de "Login", solo debo actualizar una línea en LoginPage.js.

Mantenibilidad: El código es DRY (Don't Repeat Yourself).

3. Manejo de Datos y Escenarios
Se utilizó el patrón Scenario Outline en Gherkin.

Esto permite probar tanto el flujo positivo (standard_user) como el negativo (locked_out_user) usando la misma estructura lógica, variando únicamente los datos de entrada y el resultado esperado.

4. Estabilidad de los Tests (Flakiness)
Para evitar que las pruebas fallen por lentitud de carga o red:

Se usaron Locators de Playwright en lugar de selectores tradicionales, lo que garantiza que la herramienta espere a que el elemento sea accionable antes de interactuar.

Se configuró un Custom World para asegurar que cada escenario tenga una instancia limpia del navegador, evitando contaminación de datos entre pruebas.

5. Reportabilidad
Se configuró un formateador de HTML automático que genera un reporte visual tras cada ejecución, facilitando la auditoría de resultados y el debugging mediante capturas de pantalla automáticas en caso de fallo.