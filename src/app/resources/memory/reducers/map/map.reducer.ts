import { createReducer, on } from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import { IMemory } from '../../models';
import * as actions from '../../memory.actions';

export const mapReducer = createReducer<{ [time: number]: IMemory }>(
  { },
  on(actions.add, (_, action) => {
    const entities = Object.values(_).sort((a, b) => a.createdAt - b.createdAt);
    const map = { [action.memory.createdAt]: action.memory };

    if (entities.length + 1 > environment.queueSize) {
      entities.shift();
    }

    for (const entity of entities) {
      map[entity.createdAt] = entity;
    }

    return map;
  }),
);
