
import { app } from 'electron';
import * as dotenv from 'dotenv';

import { App } from './app';

dotenv.config();

let main: App;

app.on('ready', () => {
  main = new App();
});

app.on('window-all-closed', () => {
  if (!main.isWindows) {
    app.quit();
  }
});
