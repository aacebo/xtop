import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IFileSystemState } from './file-system.state';

export const selectState = createFeatureSelector<IFileSystemState>('file-system');
export const selectFileSystems = createSelector(selectState, state => state.fileSystems);
