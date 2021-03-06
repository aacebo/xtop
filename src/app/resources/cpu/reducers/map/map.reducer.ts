import { createReducer, on } from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import { ICurrentLoad } from '../../models';
import * as actions from '../../cpu.actions';

export const mapReducer = createReducer<{ [time: number]: ICurrentLoad }>(
  { },
  on(actions.add, (_, action) => {
    const entities = Object.values(_).sort((a, b) => a.createdAt - b.createdAt);
    const map = { [action.cpu.createdAt]: action.cpu };

    if (entities.length + 1 > environment.queueSize) {
      entities.shift();
    }

    for (const entity of entities) {
      map[entity.createdAt] = entity;
    }

    return map;
  }),
);
