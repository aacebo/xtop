import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatTooltipModule, MatBadgeModule } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProcessTableComponent } from './process-table.component';

import { ContextMenuModule } from '../context-menu';
import { SearchModule } from '../search';
import { ConfirmDialogModule } from '../confirm-dialog';

@NgModule({
  declarations: [ProcessTableComponent],
  exports: [ProcessTableComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,

    NgxDatatableModule,
    ContextMenuModule,
    SearchModule,
    ConfirmDialogModule,
  ],
})
export class ProcessTableModule { }
