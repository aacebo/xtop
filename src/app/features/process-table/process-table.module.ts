import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatBadgeModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProcessTableComponent } from './process-table.component';

import { SearchModule } from '../search';
import { ConfirmDialogModule } from '../confirm-dialog';
import { ProcessDialogModule } from '../process-dialog';

@NgModule({
  declarations: [ProcessTableComponent],
  exports: [ProcessTableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    NgxDatatableModule,

    SearchModule,
    ConfirmDialogModule,
    ProcessDialogModule,
  ],
})
export class ProcessTableModule { }
