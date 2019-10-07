import { Action, combineReducers } from '@ngrx/store';

import { IFileSystemSize } from './models';
import * as fromReducers from './reducers';

export interface IFileSystemState {
  readonly fileSystems: IFileSystemSize[];
}

export function reducers(state: IFileSystemState, action: Action) {
  return combineReducers<IFileSystemState>({
    fileSystems: fromReducers.fileSystemsReducer,
  })(state, action);
}
