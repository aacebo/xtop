import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ICurrentLoad, ICurrentLoadCpu } from './models';
import { ICpuState } from './cpu.state';
import * as actions from './cpu.actions';
import * as selectors from './cpu.selectors';

@Injectable({
  providedIn: 'root',
})
export class CpuService {
  readonly state$: Observable<ICpuState>;
  readonly active$: Observable<number>;
  readonly keys$: Observable<number[]>;
  readonly map$: Observable<{ [time: number]: ICurrentLoad }>;
  readonly entity$: Observable<ICurrentLoad>;
  readonly entities$: Observable<ICurrentLoad[]>;
  readonly cpus$: Observable<{ [index: number]: ICurrentLoadCpu[] }>;

  constructor(private readonly _store: Store<ICpuState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.active$ = this._store.pipe(select(selectors.selectActive));
    this.keys$ = this._store.pipe(select(selectors.selectKeys));
    this.map$ = this._store.pipe(select(selectors.selectMap));
    this.entity$ = this._store.pipe(select(selectors.selectEntity));
    this.entities$ = this._store.pipe(select(selectors.selectEntities));
    this.cpus$ = this._store.pipe(select(selectors.selectCpus));
  }

  add(cpu: ICurrentLoad) {
    this._store.dispatch(actions.add({ cpu }));
  }
}
