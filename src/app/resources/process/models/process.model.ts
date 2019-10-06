import { TreeStatus } from '@swimlane/ngx-datatable';
import { Systeminformation } from 'systeminformation';

export interface IProcess extends Systeminformation.ProcessesProcessData {
  children: number;
  treeStatus?: TreeStatus;
}
