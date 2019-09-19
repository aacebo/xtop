
import { app, BrowserWindow, screen } from 'electron';

import * as url from 'url';
import * as dev from 'electron-is-dev';

import { Processes } from './processes';

let window: BrowserWindow;

function newWindow() {
  window = new BrowserWindow({
    height: screen.getPrimaryDisplay().size.height / 2,
    width: 800,
    show: true,
    fullscreenable: true,
    resizable: true,
    alwaysOnTop: false,
    skipTaskbar: false,
    autoHideMenuBar: true,
    frame: process.platform === 'darwin' ? false : true,
    titleBarStyle: process.platform === 'darwin' ? 'hidden' : 'default',
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

  Processes.register(window);
}

app.on('ready', () => {
  newWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'win32') {
    app.quit();
  }
});
