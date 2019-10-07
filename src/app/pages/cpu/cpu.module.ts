import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpuComponent } from './cpu.component';
import { CpuRoutingModule } from './cpu-routing.module';

import { PieChartModule } from '../../features/pie-chart';
import { LineChartModule } from '../../features/line-chart';
import { GridModule } from '../../features/grid';

@NgModule({
  declarations: [CpuComponent],
  imports: [
    CommonModule,
    CpuRoutingModule,
    PieChartModule,
    LineChartModule,
    GridModule,
  ],
})
export class CpuModule { }
