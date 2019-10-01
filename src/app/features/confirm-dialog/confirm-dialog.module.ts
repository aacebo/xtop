import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  declarations: [ConfirmDialogComponent],
  entryComponents: [ConfirmDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class ConfirmDialogModule { }
