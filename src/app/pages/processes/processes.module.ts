import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessesRoutingModule } from './processes-routing.module';
import { ProcessesComponent } from './processes.component';
import { ProcessTableModule } from '../../features/process-table';

@NgModule({
  declarations: [ProcessesComponent],
  imports: [
    CommonModule,
    ProcessesRoutingModule,
    ProcessTableModule,
  ],
})
export class ProcessesModule { }
