import { createReducer, on } from '@ngrx/store';

import * as actions from '../../actions';
import { IProcess } from '../../models';

export const mapReducer = createReducer<{ [key: number]: IProcess }>(
  { },
  on(actions.add, (_, action) => {
    const map: { [key: number]: IProcess } = { };

    for (const process of action.processes) {
      const existing = _[process.pid];

      if (!existing && process.ppid === 0) {
        process.treeStatus = 'expanded';
      } else {
        process.treeStatus = 'collapsed';
      }

      if (existing) {
        process.treeStatus = existing.treeStatus;
      }

      map[process.pid] = { ...process };
      map[process.pid].children = action.processes.filter(p => p.ppid === process.pid).length;
    }

    return map;
  }),
  on(actions.updateTreeStatus, (_, action) => {
    _[action.pid].treeStatus = action.status;
    return _;
  }),
  on(actions.remove, (state, action) => {
    for (const pid of action.pids) {
      state[pid] = undefined;
      delete state[pid];
    }

    return { ...state };
  }),
);
