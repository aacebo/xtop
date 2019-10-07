import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IMemory } from './models';
import { IMemoryState } from './memory.state';
import * as actions from './memory.actions';
import * as selectors from './memory.selectors';

@Injectable({
  providedIn: 'root',
})
export class MemoryService {
  readonly state$: Observable<IMemoryState>;
  readonly active$: Observable<number>;
  readonly keys$: Observable<number[]>;
  readonly map$: Observable<{ [time: number]: IMemory }>;
  readonly entity$: Observable<IMemory>;
  readonly entities$: Observable<IMemory[]>;

  constructor(private readonly _store: Store<IMemoryState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.active$ = this._store.pipe(select(selectors.selectActive));
    this.keys$ = this._store.pipe(select(selectors.selectKeys));
    this.map$ = this._store.pipe(select(selectors.selectMap));
    this.entity$ = this._store.pipe(select(selectors.selectEntity));
    this.entities$ = this._store.pipe(select(selectors.selectEntities));
  }

  add(memory: IMemory) {
    this._store.dispatch(actions.add({ memory }));
  }
}
