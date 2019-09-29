import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';
import { IProcess } from '../../models';

export const mapReducer = createReducer<{ [key: number]: IProcess }>(
  { },
  on(actions.add, (_, action) => {
    const map: { [key: number]: IProcess } = { };

    for (const process of action.processes) {
      const existing = _[process.pid];
      map[process.pid] = process;

      if (!existing) {
        map[process.pid].treeStatus = 'expanded';
      } else {
        map[process.pid].treeStatus = existing.treeStatus;
      }
    }

    return map;
  }),
  on(actions.updateTreeStatus, (_, action) => {
    _[action.pid].treeStatus = action.status;
    return _;
  }),
);
