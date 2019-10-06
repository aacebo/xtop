import { Systeminformation } from 'systeminformation';

import { IProcess } from './process.model';

export interface IProcesses extends Systeminformation.ProcessesData {
  list: IProcess[];
}
