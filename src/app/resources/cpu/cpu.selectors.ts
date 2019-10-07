import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ICpuState } from './cpu.state';
import { ICurrentLoadCpu } from './models';

export const selectState = createFeatureSelector<ICpuState>('cpu');
export const selectActive = createSelector(selectState, state => state.active);
export const selectKeys = createSelector(selectState, state => state.keys);
export const selectMap = createSelector(selectState, state => state.map);
export const selectEntity = createSelector(selectState, state => state.map[state.active]);
export const selectEntities = createSelector(selectState, state => Object.values(state.map));
export const selectCpus = createSelector(selectState, state => {
  const indexes = state.map[state.active].cpus.map((_, i) => i);
  const entities = Object.values(state.map);
  const map: { [index: number]: ICurrentLoadCpu[] } = { };

  for (const i of indexes) {
    map[i] = [];

    for (const entity of entities) {
      map[i].push({
        ...entity.cpus[i],
        createdAt: entity.createdAt,
      });
    }
  }

  return map;
});
