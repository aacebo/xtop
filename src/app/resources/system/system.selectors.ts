import { createFeatureSelector, createSelector } from '@ngrx/store';

import { ISystemState } from './system.state';

export const selectState = createFeatureSelector<ISystemState>('system');
export const selectSystem = createSelector(selectState, state => state.system);
export const selectIsWindows = createSelector(selectState, state => state.system ? state.system.platform === 'win32' : false);
export const selectIsMac = createSelector(selectState, state => state.system ? state.system.platform === 'darwin' : false);
export const selectIsLinux = createSelector(selectState, state => state.system ? state.system.platform === 'linux' : false);
