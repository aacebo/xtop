
import { app, BrowserWindow, screen } from 'electron';

import * as url from 'url';
import * as dev from 'electron-is-dev';

let window: BrowserWindow;

function newWindow(): void {
  window = new BrowserWindow({
    height: screen.getPrimaryDisplay().size.height / 2,
    width: 800,
    show: true,
    frame: false,
    fullscreenable: true,
    resizable: true,
    alwaysOnTop: false,
    skipTaskbar: false,
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false,
    },
  });

  window.loadURL(url.format({
    pathname: `${__dirname}/../xtop/index.html`,
    protocol: 'file:',
    slashes: true,
    hash: '',
  }));

  if (dev) {
    window.webContents.openDevTools();
  }

  window.on('closed', () => window = null);
  // window.webContents.on('dom-ready', () => {
  //   window.webContents.send('os', getSystemInfo());
  // });
}

app.on('ready', () => {
  newWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'win32') {
    app.quit();
  }
});
