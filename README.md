touch index.html
npm init --yes (default package.json)
html:5 (tab in index.html)
npm install --save-dev lite-server
"scripts": { (package.json)
	"lite": "lite-server"
}
npm run lite

npm install --save-dev typescript typings
touch tsconfig.json
touch typings.json
npm install --save-dev concurrently

npm install core-js reflect-metadata zone.js rxjs@5.0.0-beta.12 systemjs --save
npm install @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/http @angular/router --save

Definitely have these 5 files: package.json, index.html, tsconfig.json, typings.json and system.config.js
And npm install and npm start

Fill main.ts, app.component.ts and app.module.ts

Clean: Add "outDir": "dist" to tsconfig.json and link to dist in systemjs.config.js

If we're behind a proxy create .typingsrc