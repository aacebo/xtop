import { ipcMain } from 'electron';
import * as si from 'systeminformation';

export class Cpu {
  private static _timer: NodeJS.Timer;
  private static _cb: (...args: any[]) => void;

  static register(cb: (...args: any[]) => void) {
    this._cb = cb;

    ipcMain.on('cpu.subscribe', this._subscribe.bind(this));
    ipcMain.on('cpu.unsubscribe', this._unsubscribe.bind(this));
  }

  static unregister() {
    this._unsubscribe();
  }

  private static async _subscribe() {
    this._cb(await si.currentLoad());

    this._timer = setInterval(async () => {
      this._cb(await si.currentLoad());
    }, 1000);
  }

  private static _unsubscribe() {
    if (this._timer) {
      this._timer.unref();
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }
}
