import { ipcMain } from 'electron';
import * as cp from 'child_process';
import * as Parser from 'table-parser';

export class Processes {
  private static _timer: NodeJS.Timer;
  private static _cb: (ps: any[]) => void;
  private static _columns = [
    { key: 'pid', label: 'pid' },
    { key: 'ppid', label: 'ppid' },
    { key: 'uid', label: 'uid' },
    { key: 'ruser', label: 'user' },
    { key: 'tty', label: 'tty' },
    { key: 'vsz', label: 'vsz' },
    { key: 'rss', label: 'rss' },
    { key: '%cpu', label: 'cpu' },
    { key: '%mem', label: 'mem' },
    { key: 'etime', label: 'etime' },
    { key: 'pri', label: 'priority' },
    { key: 'comm', label: 'name' },
    { key: 'command', label: 'command' },
  ];

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
    let cmd = 'ps -A -o ';

    for (let i = 0; i < this._columns.length; i++) {
      cmd += `${this._columns[i].key}=${this._columns[i].label}`;

      if (i < this._columns.length - 1) {
        cmd += ',';
      }
    }

    cp.exec(cmd, (err, stdout) => {
      if (err) {
        console.error(err);
        return;
      }

      const data: any[] = Parser.parse(stdout);

      this._cb(data.map(o => {
        const map = {};

        for (const key in o) {
          if (o.hasOwnProperty(key)) {
            map[key] = isNaN(+o[key][0]) ? o[key][0] : +o[key][0];
          }
        }

        return map;
      }));
    });
  }
}
