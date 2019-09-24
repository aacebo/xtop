import { ITasksOptions } from './tasks-options.interface';
import { ITasksColumn } from './tasks-column.interface';
import { unix } from './unix.function';

export class Tasks {
  private static _columns: ITasksColumn[] = [
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

  static async find(options: ITasksOptions = { }) {
    if (process.platform !== 'win32') {
      return await unix(options.cols ? options.cols : this._columns);
    }
  }
}
