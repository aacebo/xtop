import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';

import { ProcessDialogComponent } from './process-dialog.component';
import { CommandToNameModule } from '../../core/pipes';

@NgModule({
  declarations: [ProcessDialogComponent],
  entryComponents: [ProcessDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    CommandToNameModule,
  ],
})
export class ProcessDialogModule { }
