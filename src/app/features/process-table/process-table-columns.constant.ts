import { BytesToStringPipe } from '../bytes-to-string';
import { PriorityToStringPipe } from '../priority-to-string';

import { IProcessTableColumn } from './process-table-column.interface';
import { ElapseTimeToStringPipe } from '../elapse-time-to-string';
import { ProcessStateToStringPipe } from '../process-state-to-string';

export const PROCESS_TABLE_COLUMNS: { [prop: string]: IProcessTableColumn } = {
  name: {
    name: 'Name',
    prop: 'name',
    width: 300,
    sortable: true,
    filterable: true,
    isTreeColumn: true,
    treeLevelIndent: 20,
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
  threads: {
    name: 'Threads',
    prop: 'threads',
    width: 80,
    sortable: true,
  },
  state: {
    name: 'Status',
    prop: 'state',
    width: 100,
    sortable: true,
    pipe: new ProcessStateToStringPipe(),
  },
  etime: {
    name: 'Started',
    prop: 'etime',
    width: 200,
    sortable: true,
    pipe: new ElapseTimeToStringPipe(),
  },
};
