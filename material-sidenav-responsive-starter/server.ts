import 'zone.js/dist/zone-node'; // zone reference error solution
import 'reflect-metadata';

// window reference error solution
const domino = require('domino');
const fs = require('fs');
const path = require('path');
const template = fs.readFileSync(path.join(__dirname, '.', 'dist', 'browser', 'index.html')).toString();
const win = domino.createWindow(template);
global['Event'] = win.Event;
global['Event']['prototype'] = win.Event.prototype;
global['window'] = win;
global['document'] = win.document;

// Error: The animation trigger "transform" has failed to build due to the following errors
Object.defineProperty(win.document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  },
});
// Error: no Promise impl found
Object.defineProperty(win.document.body.style, 'box-shadow', {
  value: () => {
    return {
      enumerable: true,
      configurable: true
    };
  },
});

import * as express from 'express';
import { join } from 'path';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

// Define the constants that we will use in the server
const PORT = process.env.PORT || 8080;
const staticRoot = join(process.cwd(), 'dist', 'browser');
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');
const app = express();

// Define the view engine. This will let Express.js know which function it uses to render HTML files
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

// Define default view engine to HTML
// Define the root directory for views
app.set('view engine', 'html');
app.set('views', staticRoot);

// it statically serve all other files than of type html
// and the default route (*) is to render the index.html file
app.get('*.*', express.static(staticRoot));
app.get('*', (req, res) => {
  global['navigator'] = req['headers']['user-agent'];
  res.render('index', { req });
});

// Start the server and log a message with the host and port
app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));

