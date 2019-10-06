import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TreeStatus } from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';

import { IProcess, IProcesses } from './models';
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
  readonly filters$: Observable<Partial<IProcess>>;

  constructor(private readonly _store: Store<IProcessState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.keys$ = this._store.pipe(select(selectors.selectKeys));
    this.map$ = this._store.pipe(select(selectors.selectMap));
    this.entities$ = this._store.pipe(select(selectors.selectEntities));
    this.count$ = this._store.pipe(select(selectors.selectCount));
    this.filters$ = this._store.pipe(select(selectors.selectFilters));
  }

  add(processes: IProcesses) {
    this._store.dispatch(actions.add({ processes }));
  }

  updateTreeStatus(pid: number, status: TreeStatus) {
    this._store.dispatch(actions.updateTreeStatus({ pid, status }));
  }

  filter(prop: keyof IProcess, value: string | number) {
    this._store.dispatch(actions.filter({ prop, value }));
  }

  remove(pids: number[]) {
    this._store.dispatch(actions.remove({ pids }));
  }
}
