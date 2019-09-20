import { BrowserWindow, ipcMain, EventEmitter } from 'electron';
import * as psList from 'ps-list';

export class Processes {
  private static _timer: NodeJS.Timer;
  private static _cb: (ps: psList.ProcessDescriptor[]) => void;

  static register(cb: (ps: psList.ProcessDescriptor[]) => void) {
    this._cb = cb;
    ipcMain.on('processes.subscribe', this._subscribe.bind(this));
    ipcMain.on('processes.unsubscribe', this._unsubscribe.bind(this));
  }

  private static async _subscribe() {
    this._cb(await psList());

    this._timer = setInterval(async () => {
      this._cb(await psList());
    }, 5000);
  }

  private static _unsubscribe() {
    this._timer.unref();
    clearInterval(this._timer);
    this._timer = undefined;
  }
}
