import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';

export const keysReducer = createReducer<number[]>(
  [],
  on(actions.add, (_, action) => action.processes.map(p => p.pid)),
  on(actions.remove, (state, action) => {
    for (const pid of action.pids) {
      const index = state.indexOf(pid);

      if (index > -1) {
        state.splice(index, 1);
      }
    }

    return state;
  }),
);
