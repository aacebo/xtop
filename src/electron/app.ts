import { BrowserWindow, screen } from 'electron';

import * as url from 'url';
import * as dev from 'electron-is-dev';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';

import { Settings } from './settings';
import * as Subs from './subscriptions';

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
      darkTheme: true,
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
      });

      if (fs.existsSync(Settings.path)) {
        const settings = fs.readFileSync(Settings.path, 'utf8');

        if (settings) {
          this._window.webContents.send('settings', JSON.parse(settings));
        }
      }
    });

    this._window.loadURL(url.format({
      pathname: `${__dirname}/index.html`,
      protocol: 'file:',
      slashes: true,
      hash: '',
    }));

    if (dev) {
      this._window.webContents.openDevTools();
    }

    this._window.on('closed', () => {
      this.deconscructor();
      this._window = null;
    });

    Settings.register();
    Subs.Processes.register(ps => {
      this._window.webContents.send('processes', ps);
    });

    Subs.Memory.register(mem => {
      this._window.webContents.send('memory', mem);
    });

    Subs.Cpu.register(cpu => {
      this._window.webContents.send('cpu', cpu);
    });

    Subs.FileSystem.register(fileSystem => {
      this._window.webContents.send('file-system', fileSystem);
    });

    Subs.NetworkInterface.register(ni => {
      this._window.webContents.send('network-interface', ni);
    });
  }

  deconscructor() {
    Subs.Processes.unregister();
    Subs.Memory.unregister();
    Subs.Cpu.unregister();
    Subs.NetworkInterface.unregister();
    Settings.unregister();
  }
}
