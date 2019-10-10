import { combineReducers, Action } from '@ngrx/store';

import { INetworkInterfacesStats } from './models';
import * as fromReducers from './reducers';

export interface INetworkInterfaceState {
  readonly active?: number;
  readonly keys: number[];
  readonly map: { [time: number]: INetworkInterfacesStats };
}

export function reducers(state: INetworkInterfaceState, action: Action) {
  return combineReducers<INetworkInterfaceState>({
    active: fromReducers.activeReducer,
    keys: fromReducers.keysReducer,
    map: fromReducers.mapReducer,
  })(state, action);
}
