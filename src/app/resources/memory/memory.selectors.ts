import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMemoryState } from './memory.state';

export const selectState = createFeatureSelector<IMemoryState>('memory');
export const selectActive = createSelector(selectState, state => state.active);
export const selectKeys = createSelector(selectState, state => state.keys);
export const selectMap = createSelector(selectState, state => state.map);
export const selectEntity = createSelector(selectState, state => state.map[state.active]);
export const selectEntities = createSelector(selectState, state => Object.values(state.map));
