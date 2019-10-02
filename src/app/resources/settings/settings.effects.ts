import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { ElectronService } from '../../core/services';
import * as actions from './settings.actions';

@Injectable()
export class SettingsEffects {
  readonly save$ = createEffect(() => this._actions$.pipe(
    ofType(actions.update),
    tap(action => {
      this._electron.send('settings.save', action.settings);
    }),
  ), { dispatch: false });

  constructor(
    private readonly _actions$: Actions,
    private readonly _electron: ElectronService,
  ) { }
}
