import { BytesToStringPipe } from '../bytes-to-string';
import { PriorityToStringPipe } from '../priority-to-string';

import { IProcessTableColumn } from './process-table-column.interface';

export const PROCESS_TABLE_COLUMNS: { [prop: string]: IProcessTableColumn } = {
  name: {
    name: 'Name',
    prop: 'name',
    width: 300,
    sortable: true,
    isTreeColumn: true,
    filterable: true,
  },
  user: {
    name: 'User',
    prop: 'user',
    width: 80,
    sortable: true,
    filterable: true,
  },
  cpu: {
    name: 'CPU %',
    prop: 'cpu',
    width: 80,
    sortable: true,
  },
  mem: {
    name: 'Memory %',
    prop: 'mem',
    width: 80,
    sortable: true,
  },
  priority: {
    name: 'Priority',
    prop: 'priority',
    width: 80,
    sortable: true,
    pipe: new PriorityToStringPipe(),
  },
  rss: {
    name: 'RSS',
    prop: 'rss',
    width: 80,
    sortable: true,
    pipe: new BytesToStringPipe(),
  },
  vsz: {
    name: 'VSZ',
    prop: 'vsz',
    width: 80,
    sortable: true,
    pipe: new BytesToStringPipe(),
  },
  pid: {
    name: 'PID',
    prop: 'pid',
    width: 80,
    sortable: true,
    filterable: true,
  },
};
