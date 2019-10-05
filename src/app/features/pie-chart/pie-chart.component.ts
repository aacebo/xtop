import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { SingleSeries } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartComponent {
  @Input() data: SingleSeries = [];
  @Input() doughnut = false;
  @Input() labels = true;
  @Input() colors: { domain: string[] };
  @Input() animations = false;
}
