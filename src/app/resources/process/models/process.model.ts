import { TreeStatus } from '@swimlane/ngx-datatable';

export interface IProcess {
  readonly pid: number;
  readonly ppid: number;
  readonly uid: number;
  readonly user: string;
  readonly tty: string;
  readonly vsz: number;
  readonly rss: number;
  readonly cpu: number;
  readonly mem: number;
  readonly etime: number;
  readonly priority: number;
  readonly threads: number;
  readonly name: string;
  readonly command: string;

  children: number;
  treeStatus?: TreeStatus;
}
