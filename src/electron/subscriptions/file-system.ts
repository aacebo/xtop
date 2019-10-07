import { ipcMain } from 'electron';
import * as si from 'systeminformation';

export class FileSystem {
  private static _cb: (...args: any[]) => void;

  static register(cb: (...args: any[]) => void) {
    this._cb = cb;

    ipcMain.on('file-system.subscribe', this._subscribe.bind(this));
  }

  private static async _subscribe() {
    this._cb(await si.fsSize());
  }
}
