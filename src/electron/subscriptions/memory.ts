import { ipcMain } from 'electron';
import * as osu from 'node-os-utils';

export class Memory {
  private static _timer: NodeJS.Timer;
  private static _cb: (...args) => void;

  static register(cb: (...args) => void) {
    this._cb = cb;

    ipcMain.on('memory.subscribe', this._subscribe.bind(this));
    ipcMain.on('memory.unsubscribe', this._unsubscribe.bind(this));
  }

  static unregister() {
    this._unsubscribe();
  }

  private static async _subscribe() {
    osu.mem.info().then(i => this._cb(i));

    this._timer = setInterval(async () => {
      osu.mem.info().then(i => this._cb(i));
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
