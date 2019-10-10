import { createReducer, on } from '@ngrx/store';

import { environment } from '../../../../../environments/environment';
import { INetworkInterfacesStats } from '../../models';
import * as actions from '../../network-interface.actions';

export const mapReducer = createReducer<{ [time: number]: INetworkInterfacesStats }>(
  { },
  on(actions.add, (_, action) => {
    const entities = Object.values(_).sort((a, b) => a.createdAt - b.createdAt);
    const map = { [action.stats.createdAt]: action.stats };

    if (entities.length + 1 > environment.queueSize) {
      entities.shift();
    }

    for (const entity of entities) {
      map[entity.createdAt] = entity;
    }

    return map;
  }),
);
