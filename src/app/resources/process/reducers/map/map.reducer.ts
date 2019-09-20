import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';
import { IProcess } from '../../models';

export const mapReducer = createReducer<{ [key: number]: IProcess }>(
  { },
  on(actions.add, (_, action) => {
    const map: { [key: number]: IProcess } = { };

    for (const process of action.processes) {
      map[process.pid] = process;
    }

    return map;
  }),
);
