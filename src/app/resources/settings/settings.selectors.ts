import { createSelector, createFeatureSelector } from '@ngrx/store';

import { ISettingsState } from './settings.state';

export const selectState = createFeatureSelector<ISettingsState>('settings');
export const selectSettings = createSelector(selectState, state => state.settings);
export const selectProcessesSettings = createSelector(selectSettings, state => state.processes);
export const selectVisibleColumns = createSelector(selectProcessesSettings, state => {
    return Object.values(state.columns)
                 .sort((a, b) => a.index - b.index)
                 .filter(c => c.visible === true);
});
