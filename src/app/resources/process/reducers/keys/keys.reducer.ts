import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';

export const keysReducer = createReducer<number[]>(
  [],
  on(actions.add, (_, action) => action.processes.map(p => p.pid))
);
