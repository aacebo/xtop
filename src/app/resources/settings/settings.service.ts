import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IProcessTableColumn } from '../process';
import { IProcessesSettings, ISettings } from './models';
import { ISettingsState } from './settings.state';
import * as actions from './settings.actions';
import * as selectors from './settings.selectors';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  readonly state$: Observable<ISettingsState>;
  readonly settings$: Observable<ISettings>;
  readonly processes$: Observable<IProcessesSettings>;
  readonly visibleColumns$: Observable<IProcessTableColumn[]>;

  constructor(private readonly _store: Store<ISettingsState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.settings$ = this._store.pipe(select(selectors.selectSettings));
    this.processes$ = this._store.pipe(select(selectors.selectProcessesSettings));
    this.visibleColumns$ = this._store.pipe(select(selectors.selectVisibleColumns));
  }

  init(settings: ISettings) {
    this._store.dispatch(actions.init({ settings }));
  }

  update(settings: ISettings) {
    this._store.dispatch(actions.update({ settings }));
  }
}
