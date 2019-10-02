import { BrowserWindow, screen } from 'electron';

import * as url from 'url';
import * as dev from 'electron-is-dev';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

const pkg = require('../../package.json');

import { Processes } from './processes';
import { Settings } from './settings';

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
    if (dev && process.env.REDUX_EXTENSION_LOCATION) {
      BrowserWindow.addDevToolsExtension(
        path.join(os.homedir(), process.env.REDUX_EXTENSION_LOCATION),
      );
    }

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
      backgroundColor: '#424242',
      webPreferences: {
        nodeIntegration: true,
        backgroundThrottling: false,
      },
    });

    this._window.webContents.on('dom-ready', () => {
      this._window.webContents.send('system', {
        pid: process.pid,
        platform: process.platform,
        version: pkg.version,
        license: pkg.license,
        author: pkg.author,
        name: pkg.name,
        description: pkg.description,
      });

      if (fs.existsSync(Settings.path)) {
        const settings = fs.readFileSync(Settings.path, 'utf8');

        if (settings) {
          this._window.webContents.send('settings', JSON.parse(settings));
        }
      }
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

    this._window.on('closed', () => {
      Processes.unregister();
      this._window = null;
    });

    Settings.register();
    Processes.register(ps => {
      this._window.webContents.send('processes', ps);
    });
  }

  deconscructor() {
    Processes.unregister();
  }
}
