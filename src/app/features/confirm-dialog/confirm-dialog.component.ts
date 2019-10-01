import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { IConfirmDialogOptions } from './confirm-dialog-options.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) readonly options: IConfirmDialogOptions,
    private readonly _dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) { }

  confirm() {
    this._dialogRef.close(true);
  }

  cancel() {
    this._dialogRef.close(false);
  }
}
