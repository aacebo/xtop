import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

import { ProcessSheetComponent } from './process-sheet.component';

@NgModule({
  declarations: [ProcessSheetComponent],
  entryComponents: [ProcessSheetComponent],
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ProcessSheetModule { }
