import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ISystem } from './models';
import { ISystemState } from './system.state';
import * as actions from './system.actions';
import * as selectors from './system.selectors';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  readonly state$: Observable<ISystemState>;
  readonly system$: Observable<ISystem>;

  constructor(private readonly _store: Store<ISystemState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.system$ = this._store.pipe(select(selectors.selectSystem));
  }

  add(system: ISystem) {
    this._store.dispatch(actions.add({ system }));
  }
}
