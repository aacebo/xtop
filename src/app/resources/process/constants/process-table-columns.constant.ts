import { IProcessTableColumn } from '../models';

export const PROCESS_TABLE_COLUMNS: { [prop: string]: IProcessTableColumn } = {
  name: {
    index: 0,
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
    index: 1,
    name: 'User',
    prop: 'user',
    width: 80,
    sortable: true,
    filterable: true,
    visible: true,
  },
  cpu: {
    index: 2,
    name: 'CPU %',
    prop: 'cpu',
    width: 80,
    sortable: true,
    visible: true,
  },
  mem: {
    index: 3,
    name: 'Memory %',
    prop: 'mem',
    width: 80,
    sortable: true,
    visible: true,
  },
  priority: {
    index: 4,
    name: 'Priority',
    prop: 'priority',
    width: 80,
    sortable: true,
  },
  rss: {
    index: 5,
    name: 'RSS',
    prop: 'rss',
    width: 80,
    sortable: true,
  },
  vsz: {
    index: 6,
    name: 'VSZ',
    prop: 'vsz',
    width: 80,
    sortable: true,
  },
  pid: {
    index: 7,
    name: 'PID',
    prop: 'pid',
    width: 80,
    sortable: true,
    filterable: true,
  },
  threads: {
    index: 8,
    name: 'Threads',
    prop: 'threads',
    width: 80,
    sortable: true,
  },
  state: {
    index: 9,
    name: 'Status',
    prop: 'state',
    width: 100,
    sortable: true,
  },
  etime: {
    index: 10,
    name: 'Started',
    prop: 'etime',
    width: 200,
    sortable: true,
    visible: true,
  },
};
