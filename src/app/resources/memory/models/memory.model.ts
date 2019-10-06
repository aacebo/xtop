import { Systeminformation } from 'systeminformation';

export interface IMemory extends Systeminformation.MemData {
  readonly createdAt: number;
}
