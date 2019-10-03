import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { IProcess } from '../../resources/process';

@Component({
  selector: 'app-process-dialog',
  templateUrl: './process-dialog.component.html',
  styleUrls: ['./process-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) readonly data: { process: IProcess },
  ) { }
}
