import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemoryComponent } from './memory.component';
import { MemoryRoutingModule } from './memory-routing.module';

import { PieChartModule } from '../../features/pie-chart';
import { LineChartModule } from '../../features/line-chart';
import { GridModule } from '../../features/grid';

@NgModule({
  declarations: [MemoryComponent],
  imports: [
    CommonModule,
    MemoryRoutingModule,
    PieChartModule,
    LineChartModule,
    GridModule,
  ],
})
export class MemoryModule { }
