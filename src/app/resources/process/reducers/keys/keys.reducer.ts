import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';

export const keysReducer = createReducer(
  [],
  on(actions.add, (_, action) => action.processes.map(p => p.pid))
);
