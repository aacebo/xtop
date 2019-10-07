import { Systeminformation } from 'systeminformation';

export interface ICurrentLoadCpu extends Systeminformation.CurrentLoadCpuData {
  readonly createdAt: number;
}
