import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { MultiSeries } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LineChartComponent {
  @Input() data: MultiSeries = [];
  @Input() colors: { domain: string[] };
  @Input() xMin: number;
  @Input() xMax: number;
  @Input() yMin: number;
  @Input() yMax: number;
  @Input() xLabel: string;
  @Input() yLabel: string;
  @Input() showY = false;
  @Input() showX = false;
  @Input() showXLabel = false;
  @Input() showYLabel = false;
  @Input() autoScale = false;
  @Input() animations = false;
  @Input() showGridLines = true;
}
