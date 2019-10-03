import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SettingsDialogComponent } from './settings-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class SettingsDialogService {
  constructor(private readonly _dialog: MatDialog) { }

  open() {
    return this._dialog.open(SettingsDialogComponent, {
      minWidth: '50%',
      maxHeight: '80%',
      position: { top: '50px' },
    });
  }
}
