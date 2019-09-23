export interface IProcess {
  readonly pid: number;
  readonly ppid: number;
  readonly uid: number;
  readonly ruser: string;
  readonly tty: string;
  readonly vsz: number;
  readonly rss: number;
  readonly cpu: number;
  readonly mem: number;
  readonly elapsed: string;
  readonly pri: number;
  readonly comm: string;
  readonly command: string;
}
