import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IProcessState } from './process.state';
import { IProcess } from './models';

export const selectState = createFeatureSelector<IProcessState>('process');
export const selectKeys = createSelector(selectState, state => state.keys);
export const selectMap = createSelector(selectState, state => state.map);
export const selectFilters = createSelector(selectState, state => state.filters);
export const selectEntities = createSelector(selectState, state => {
  const processes = Object.values(state.map);
  const keys: (keyof IProcess)[] = Object.keys(state.filters) as (keyof IProcess)[];

  return processes.filter(v => {
    for (const key of keys) {
      if (v[key].toString().indexOf(state.filters[key].toString()) === -1) {
        return false;
      }
    }

    return true;
  });
});

export const selectCount = createSelector(selectEntities, entities => entities.length);
