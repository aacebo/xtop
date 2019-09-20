
import { app } from 'electron';

import { App } from './app';

let main: App;

app.on('ready', () => {
  main = new App();
});

app.on('window-all-closed', () => {
  if (!main.isWindows) {
    app.quit();
  }
});
