export interface ITask {
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
}
