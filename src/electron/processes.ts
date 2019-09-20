import { ipcMain } from 'electron';
import * as psList from 'ps-list';
import * as arrayToTree from 'array-to-tree';

export class Processes {
  private static _timer: NodeJS.Timer;
  private static _cb: (ps: psList.ProcessDescriptor[]) => void;

  static register(cb: (ps: psList.ProcessDescriptor[]) => void) {
    this._cb = cb;
    ipcMain.on('processes.subscribe', this._subscribe.bind(this));
    ipcMain.on('processes.unsubscribe', this._unsubscribe.bind(this));
  }

  private static async _subscribe() {
    this._cb(await this._getProcesses());

    this._timer = setInterval(async () => {
      this._cb(await this._getProcesses());
    }, 5000);
  }

  private static _unsubscribe() {
    this._timer.unref();
    clearInterval(this._timer);
    this._timer = undefined;
  }

  private static async _getProcesses() {
    return arrayToTree(await psList(), {
      parentProperty: 'ppid',
      customID: 'pid'
    });
  }
}
