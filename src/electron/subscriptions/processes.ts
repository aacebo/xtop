import { ipcMain, Event } from 'electron';

import { Tasks } from '../tasks';

export class Processes {
  private static _timer: NodeJS.Timer;
  private static _cb: (ps: any[]) => void;

  static register(cb: (ps: any[]) => void) {
    this._cb = cb;

    ipcMain.on('processes.subscribe', this._subscribe.bind(this));
    ipcMain.on('processes.unsubscribe', this._unsubscribe.bind(this));
    ipcMain.on('processes.kill', this._kill.bind(this));
  }

  static unregister() {
    this._unsubscribe();
  }

  private static async _subscribe() {
    this._cb(await Tasks.find());

    this._timer = setInterval(async () => {
      this._cb(await Tasks.find());
    }, 3000);
  }

  private static _unsubscribe() {
    if (this._timer) {
      this._timer.unref();
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }

  private static async _kill(_: Event, pids: number[]) {
    await Tasks.kill(pids);
  }
}