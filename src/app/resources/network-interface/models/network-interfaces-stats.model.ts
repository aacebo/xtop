import { Systeminformation } from 'systeminformation';

export interface INetworkInterfacesStats {
  readonly interfaces: Systeminformation.NetworkStatsData[];
  readonly createdAt: number;
}
