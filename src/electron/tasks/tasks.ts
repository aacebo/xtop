import { ITasksOptions } from './tasks-options.interface';
import { ITasksColumn } from './tasks-column.interface';
import { find } from './find.unix.function';
import { kill } from './kill.unix.function';
import * as formatters from './formatters';

export class Tasks {
  private static _columns: ITasksColumn[] = [
    { key: 'pid', label: 'pid' },
    { key: 'ppid', label: 'ppid' },
    { key: 'uid', label: 'uid' },
    { key: 'ruser', label: 'user' },
    { key: 'tty', label: 'tty' },
    { key: 'vsz', label: 'vsz', formatter: formatters.kbToBytes },
    { key: 'rss', label: 'rss', formatter: formatters.kbToBytes },
    { key: '%cpu', label: 'cpu' },
    { key: '%mem', label: 'mem' },
    { key: 'etime', label: 'etime', formatter: formatters.etimeFormatter },
    { key: 'pri', label: 'priority' },
    { key: 'nlwp', label: 'threads', mac: false },
    { key: 'state', label: 'state' },
    { key: 'wchan', label: 'wchan' },
    { key: 'cputime', label: 'cpuTime', formatter: formatters.etimeFormatter },
    { key: 'comm', label: 'name' },
    { key: 'command', label: 'command' },
  ];

  static async find(options: ITasksOptions = { }) {
    if (process.platform !== 'win32') {
      return await find(options.cols ? options.cols : this._columns);
    }
  }

  static async kill(pids: number[]) {
    if (process.platform !== 'win32') {
      return await kill(pids);
    }
  }
}
