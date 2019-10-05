import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryComponent } from './memory.component';
import { MemoryRoutingModule } from './memory-routing.module';

import { PieChartModule } from '../../features/pie-chart';
import { LineChartModule } from '../../features/line-chart';

@NgModule({
  declarations: [MemoryComponent],
  imports: [
    CommonModule,
    MemoryRoutingModule,
    PieChartModule,
    LineChartModule,
  ],
})
export class MemoryModule { }
