import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartModule as NgxPieChartModule } from '@swimlane/ngx-charts';

import { PieChartComponent } from './pie-chart.component';

@NgModule({
  declarations: [PieChartComponent],
  exports: [PieChartComponent],
  imports: [
    CommonModule,
    NgxPieChartModule,
  ],
})
export class PieChartModule { }
