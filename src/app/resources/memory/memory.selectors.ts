import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IMemoryState } from './memory.state';

export const selectState = createFeatureSelector<IMemoryState>('memory');
export const selectMemory = createSelector(selectState, state => state.memory);
