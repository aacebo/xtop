import { IProcessTableColumn } from '../../process';

export interface IProcessesSettings {
  readonly columns: { [prop: string]: IProcessTableColumn };
}
