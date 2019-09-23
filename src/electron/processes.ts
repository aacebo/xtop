import { ipcMain } from 'electron';
import * as cp from 'child_process';

export class Processes {
  private static _timer: NodeJS.Timer;
  private static _cb: (ps: any[]) => void;

  static register(cb: (ps: any[]) => void) {
    this._cb = cb;
    ipcMain.on('processes.subscribe', this._subscribe.bind(this));
    ipcMain.on('processes.unsubscribe', this._unsubscribe.bind(this));
  }

  static unregister() {
    this._unsubscribe();
    ipcMain.removeAllListeners('processes.subscribe');
    ipcMain.removeAllListeners('processes.subscribe');
  }

  private static async _subscribe() {
    this._getProcesses();

    this._timer = setInterval(async () => {
      this._getProcesses();
    }, 5000);
  }

  private static _unsubscribe() {
    this._timer.unref();
    clearInterval(this._timer);
    this._timer = undefined;
  }

  private static _getProcesses() {
    cp.exec('ps -A -o pid,ppid,uid,ruser,tty,vsz,rss,%cpu,%mem,etime,pri,comm,command | sed \'s/  */ /g\'', (err, stdout) => {
      if (err) {
        console.error(err);
        return;
      }

      const lines = stdout.split('\n');
      const cols = lines.shift().split(' ').map(c => c.replace('%', '').toLowerCase());
      const data = [];

      for (const line of lines) {
        const rec = {};
        const args = line.split(' ');

        for (let i = 0; i < cols.length; i++) {
          if (cols[i]) {
            rec[cols[i]] = isNaN(+args[i]) ? args[i] : +args[i];
          }
        }

        data.push(rec);
      }

      this._cb(data);
    });
  }
}
