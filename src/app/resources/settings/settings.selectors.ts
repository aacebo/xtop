import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ISettingsState } from './settings.state';

export const selectState = createFeatureSelector<ISettingsState>('settings');
export const selectProcesses = createSelector(selectState, state => state.processes);
export const selectProcessesColumns = createSelector(selectProcesses, state => {
  return Object.values(state.columns)
               .filter(c => c.visible === true);
});
