import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmDialogComponent } from './confirm-dialog.component';
import { IConfirmDialogOptions } from './confirm-dialog-options.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private readonly _dialog: MatDialog) { }

  open(options: IConfirmDialogOptions) {
    return this._dialog.open(ConfirmDialogComponent, {
      position: { top: '50px' },
      data: options,
    });
  }
}
