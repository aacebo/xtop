import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessesRoutingModule } from './processes-routing.module';
import { ProcessesComponent } from './processes.component';
import { TreeTableModule } from '../../features/tree-table';

@NgModule({
  declarations: [ProcessesComponent],
  imports: [
    CommonModule,
    ProcessesRoutingModule,
    TreeTableModule,
  ],
})
export class ProcessesModule { }
