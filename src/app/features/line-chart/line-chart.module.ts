import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaChartModule as NgxAreaChartModule } from '@swimlane/ngx-charts';

import { LineChartComponent } from './line-chart.component';

@NgModule({
  declarations: [LineChartComponent],
  exports: [LineChartComponent],
  imports: [
    CommonModule,
    NgxAreaChartModule,
  ],
})
export class LineChartModule { }
