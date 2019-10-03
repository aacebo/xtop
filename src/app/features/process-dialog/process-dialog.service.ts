import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { IProcess } from '../../resources/process';
import { ProcessDialogComponent } from './process-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ProcessDialogService {
  constructor(private readonly _dialog: MatDialog) { }

  open(process: IProcess) {
    return this._dialog.open(ProcessDialogComponent, {
      position: { top: '50px' },
      data: { process },
    });
  }
}
