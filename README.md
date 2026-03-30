# Proyecto de Pruebas con Playwright y Cucumber

Este repositorio contiene una solución de automatización de pruebas para la web Sauce Demo, diseñada bajo estándares de arquitectura escalable para perfiles QA Automation Senior.


🚀 Tecnologías Utilizadas

Playwright: Motor de ejecución de pruebas (Rápido, confiable y con auto-wait).

Cucumber (Gherkin): Framework de BDD para pruebas legibles por negocio.

JavaScript: Lenguaje de programación.

Page Object Model (POM): Patrón de diseño para modularidad y mantenimiento.


🛠️ Configuración e Instalación

Prerrequisitos
Node.js (Versión 18 o superior recomendada - se creó con Versión 21).

VS Code (Opcional, pero recomendado - se creó con VS Code).

Instalación
1. Clona el repositorio:

Bash    
    git clone <url-de-tu-repositorio>
    cd <nombre-de-la-carpeta>

2. Instala las dependencias necesarias:

Bash
    npm install @playwright/test @cucumber/cucumber playwright

3. Instala los navegadores de Playwright:

Bash
    npx playwright install


🧪 Ejecución de Pruebas

Para ejecutar todos los escenarios y generar el reporte:

Bash
    npm test

🏗️ Estrategia de Automatización y Patrones
1. Patrón de Diseño: Page Object Model (POM)
Se ha implementado el patrón POM para desacoplar la estructura de la página web de la lógica de los tests. Cada página (LoginPage, InventoryPage) encapsula sus propios selectores y métodos de interacción, facilitando el mantenimiento ante cambios en la UI.

2. BDD (Behavior Driven Development)
Se utiliza Gherkin para definir los criterios de aceptación en lenguaje natural. Esto permite:

Cerrar la brecha de comunicación entre perfiles técnicos y de negocio.

Reutilización de Step Definitions.

Manejo de múltiples tipos de usuario mediante Scenario Outlines.

3. Estabilidad y Escalabilidad
Selectores Robustos: Se priorizó el uso de atributos data-test sobre selectores CSS o XPaths frágiles.

Hooks: Configuración de Before y After para limpieza de estado y cierre de navegador.

Captura de Errores: El framework está configurado para tomar capturas de pantalla (screenshots) automáticamente si un escenario falla (ver carpeta support/hooks.js).

📂 Estructura del Proyecto

├── features/           # Definición de escenarios en Gherkin (.feature)
├── pages/              # Clases de Page Object Model (Lógica de UI)
├── step-definitions/   # Implementación de los pasos de Cucumber
├── support/            # Configuración global (World, Hooks)
├── reports/            # Reportes de ejecución generados (HTML)
├── cucumber.js         # Configuración del motor Cucumber
└── package.json        # Dependencias y scripts

También se ha incluido el archivo .gitignore donde especificamos no subir la cache (navegadores que ocupan espacio) y credenciales de usuario, DS_Store para los archivos Mac de configuración, etc.


👤 Escenarios Cubiertos

✅ Login exitoso (standard_user).

❌ Login fallido / Usuario bloqueado (locked_out_user).

🛒 Flujo completo de compra:

Agregar producto al carrito.

Verificación de producto en carrito.

Finalización de Checkout (Formulario y confirmación).