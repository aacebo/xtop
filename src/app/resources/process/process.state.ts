import { Action, combineReducers } from '@ngrx/store';

import { IProcess } from './models';
import * as fromReducers from './reducers';

export interface IProcessState {
  readonly filters: Partial<IProcess>;
  readonly keys: number[];
  readonly map: { [key: number]: IProcess };
}

export function reducers(state: IProcessState, action: Action) {
  return combineReducers<IProcessState>({
    filters: fromReducers.filtersReducer,
    keys: fromReducers.keysReducer,
    map: fromReducers.mapReducer,
  })(state, action);
}
