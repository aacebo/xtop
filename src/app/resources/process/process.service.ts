import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IProcess } from './models';
import { IProcessState } from './process.state';
import * as selectors from './process.selectors';
import * as actions from './actions';

@Injectable({
  providedIn: 'root',
})
export class ProcessService {
  readonly state$: Observable<IProcessState>;
  readonly keys$: Observable<number[]>;
  readonly map$: Observable<{ [pid: number]: IProcess }>;
  readonly entities$: Observable<IProcess[]>;
  readonly count$: Observable<number>;

  constructor(private readonly _store: Store<IProcessState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.keys$ = this._store.pipe(select(selectors.selectKeys));
    this.map$ = this._store.pipe(select(selectors.selectMap));
    this.entities$ = this._store.pipe(select(selectors.selectEntities));
    this.count$ = this._store.pipe(select(selectors.selectCount));
  }

  add(processes: IProcess[]) {
    this._store.dispatch(actions.add({ processes }));
  }
}
