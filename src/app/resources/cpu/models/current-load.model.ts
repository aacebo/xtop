import { Systeminformation } from 'systeminformation';

export interface ICurrentLoad extends Systeminformation.CurrentLoadData {
  readonly createdAt: number;
}
