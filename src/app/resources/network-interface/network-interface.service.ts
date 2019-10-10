import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { INetworkInterfacesStats } from './models';
import { INetworkInterfaceState } from './network-interface.state';
import * as actions from './network-interface.actions';
import * as selectors from './network-interface.selectors';

@Injectable({
  providedIn: 'root',
})
export class NetworkInterfaceService {
  readonly state$: Observable<INetworkInterfaceState>;
  readonly active$: Observable<number>;
  readonly keys$: Observable<number[]>;
  readonly map$: Observable<{ [time: number]: INetworkInterfacesStats }>;
  readonly entity$: Observable<INetworkInterfacesStats>;
  readonly entities$: Observable<INetworkInterfacesStats[]>;

  constructor(private readonly _store: Store<INetworkInterfaceState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.active$ = this._store.pipe(select(selectors.selectActive));
    this.keys$ = this._store.pipe(select(selectors.selectKeys));
    this.map$ = this._store.pipe(select(selectors.selectMap));
    this.entity$ = this._store.pipe(select(selectors.selectEntity));
    this.entities$ = this._store.pipe(select(selectors.selectEntities));
  }

  add(stats: INetworkInterfacesStats) {
    this._store.dispatch(actions.add({ stats }));
  }
}
