npm install -g angular-cli (tarda)
ng new my-app (tarda)
cd my-app
ng serve

touch index.html
npm init --yes (crea el package.json por defecto)
html:5 (tab en index.html)
npm install --save-dev lite-server
"scripts": { (En package.json)
	"lite": "lite-server"
}
npm run lite

npm install --save-dev typescript typings
touch tsconfig.json
touch typings.json
npm install --save-dev concurrently

npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save
npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router --save

En definitiva: tener los 5 ficheros: package.json, index.html, tsconfig.json, typings.json y system.config.js
Y npm install y npm start

Rellenar main.ts, app.component.ts y app.module.ts

Clean: añadir "outDir": "dist" a tsconfig y enlazando a dist en systemjs.config.js