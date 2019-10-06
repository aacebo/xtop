import { ipcMain } from 'electron';
import * as si from 'systeminformation';

export class Processes {
  private static _timer: NodeJS.Timer;
  private static _cb: (...args) => void;

  static register(cb: (...args) => void) {
    this._cb = cb;

    ipcMain.on('processes.subscribe', this._subscribe.bind(this));
    ipcMain.on('processes.unsubscribe', this._unsubscribe.bind(this));
  }

  static unregister() {
    this._unsubscribe();
  }

  private static async _subscribe() {
    this._cb(await si.processes());

    this._timer = setInterval(async () => {
      this._cb(await si.processes());
    }, 3000);
  }

  private static _unsubscribe() {
    if (this._timer) {
      this._timer.unref();
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }
}
