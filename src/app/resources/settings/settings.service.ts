import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IProcessTableColumn } from '../process';
import { IProcessesSettings } from './models';
import { ISettingsState } from './settings.state';
import * as actions from './actions';
import * as selectors from './settings.selectors';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  readonly state$: Observable<ISettingsState>;
  readonly processes$: Observable<IProcessesSettings>;
  readonly processesColumns$: Observable<IProcessTableColumn[]>;

  constructor(private readonly _store: Store<ISettingsState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.processes$ = this._store.pipe(select(selectors.selectProcesses));
    this.processesColumns$ = this._store.pipe(select(selectors.selectProcessesColumns));
  }

  updateProcesses(settings: IProcessesSettings) {
    this._store.dispatch(actions.updateProcesses({ settings }));
  }
}
