import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ProcessTableComponent } from './process-table.component';

@NgModule({
  declarations: [ProcessTableComponent],
  exports: [ProcessTableComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
  ],
})
export class ProcessTableModule { }
