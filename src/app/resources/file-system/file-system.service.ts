import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { IFileSystemSize } from './models';
import { IFileSystemState } from './file-system.state';
import * as actions from './file-system.actions';
import * as selectors from './file-system.selectors';

@Injectable({
  providedIn: 'root',
})
export class FileSystemService {
  readonly state$: Observable<IFileSystemState>;
  readonly fileSystems$: Observable<IFileSystemSize[]>;

  constructor(private readonly _store: Store<IFileSystemState>) {
    this.state$ = this._store.pipe(select(selectors.selectState));
    this.fileSystems$ = this._store.pipe(select(selectors.selectFileSystems));
  }

  add(fs: IFileSystemSize[]) {
    this._store.dispatch(actions.add({ fs }));
  }
}
