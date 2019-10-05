import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMemoryState } from './memory.state';

export const selectState = createFeatureSelector<IMemoryState>('memory');
export const selectMemory = createSelector(selectState, state => state.memory);
export const selectKeys = createSelector(selectState, state => state.keys);
export const selectMap = createSelector(selectState, state => state.map);
export const selectEntities = createSelector(selectState, state => Object.values(state.map));
