import { BytesToStringPipe } from '../../../features/bytes-to-string';
import { PriorityToStringPipe } from '../../../features/priority-to-string';
import { ElapseTimeToStringPipe } from '../../../features/elapse-time-to-string';
import { ProcessStateToStringPipe } from '../../../features/process-state-to-string';

import { IProcessTableColumn } from '../models';

export const PROCESS_TABLE_COLUMNS: { [prop: string]: IProcessTableColumn } = {
  name: {
    name: 'Name',
    prop: 'name',
    width: 300,
    sortable: true,
    filterable: true,
    isTreeColumn: true,
    visible: true,
    treeLevelIndent: 20,
  },
  user: {
    name: 'User',
    prop: 'user',
    width: 80,
    sortable: true,
    filterable: true,
    visible: true,
  },
  cpu: {
    name: 'CPU %',
    prop: 'cpu',
    width: 80,
    sortable: true,
    visible: true,
  },
  mem: {
    name: 'Memory %',
    prop: 'mem',
    width: 80,
    sortable: true,
    visible: true,
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
    visible: true,
    pipe: new ElapseTimeToStringPipe(),
  },
};
