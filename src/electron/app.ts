import { BrowserWindow, screen } from 'electron';

import * as url from 'url';
import * as dev from 'electron-is-dev';

import { Processes } from './processes';

export class App {
  private _window: BrowserWindow;

  get isWindows() {
    return process.platform === 'win32';
  }

  get isMac() {
    return process.platform === 'darwin';
  }

  get isLinux() {
    return process.platform === 'linux';
  }

  get isDev() {
    return dev;
  }

  constructor() {
    this._window = new BrowserWindow({
      height: screen.getPrimaryDisplay().size.height / 2,
      width: screen.getPrimaryDisplay().size.width / 2,
      show: true,
      fullscreenable: true,
      resizable: true,
      alwaysOnTop: false,
      skipTaskbar: false,
      autoHideMenuBar: true,
      frame: this.isMac ? false : true,
      titleBarStyle: this.isMac ? 'hidden' : 'default',
      webPreferences: {
        nodeIntegration: true,
        backgroundThrottling: false,
      },
    });

    this._window.loadURL(url.format({
      pathname: `${__dirname}/../xtop/index.html`,
      protocol: 'file:',
      slashes: true,
      hash: '',
    }));

    if (dev) {
      this._window.webContents.openDevTools();
    }

    this._window.on('closed', () => window = null);

    Processes.register(ps => {
      this._window.webContents.send('processes', ps);
    });
  }
}
