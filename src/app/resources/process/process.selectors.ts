import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IProcessState } from './process.state';

export const selectState = createFeatureSelector<IProcessState>('process');
export const selectKeys = createSelector(selectState, state => state.keys);
export const selectMap = createSelector(selectState, state => state.map);
export const selectEntities = createSelector(selectState, state => Object.values(state.map));
