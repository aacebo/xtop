import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';

import { ProcessDialogComponent } from './process-dialog.component';

@NgModule({
  declarations: [ProcessDialogComponent],
  entryComponents: [ProcessDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
})
export class ProcessDialogModule { }
