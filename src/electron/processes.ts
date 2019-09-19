import { BrowserWindow, ipcMain } from 'electron';
import * as psList from 'ps-list';

export class Processes {
  private static _timer: NodeJS.Timer;
  private static _window: BrowserWindow;

  static register(window: BrowserWindow) {
    this._window = window;
    ipcMain.on('subscribe-processes', this._subscribe.bind(this));
    ipcMain.on('unsubscribe-processes', this._unsubscribe.bind(this));
  }

  private static _subscribe() {
    this._timer = setInterval(async () => {
      this._window.webContents.send('processes', await psList());
    }, 5000);
  }

  private static _unsubscribe() {
    this._timer.unref();
    clearInterval(this._timer);
    this._timer = undefined;
  }
}
