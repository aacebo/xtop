import { Action, combineReducers } from '@ngrx/store';

import { ICurrentLoad } from './models';
import * as fromReducers from './reducers';

export interface ICpuState {
  readonly active?: number;
  readonly keys: number[];
  readonly map: { [time: number]: ICurrentLoad };
}

export function reducers(state: ICpuState, action: Action) {
  return combineReducers<ICpuState>({
    active: fromReducers.activeReducer,
    keys: fromReducers.keysReducer,
    map: fromReducers.mapReducer,
  })(state, action);
}
