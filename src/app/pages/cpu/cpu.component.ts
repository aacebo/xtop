import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MultiSeries } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { PageTemplate } from '../../core/templates';
import { ElectronService } from '../../core/services';
import { getRandomColor } from '../../core/utils';
import { CpuService, ICurrentLoad } from '../../resources/cpu';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpuComponent extends PageTemplate {
  readonly usageLineChart$: Observable<MultiSeries>;
  readonly colors$: Observable<{ domain: string[] }>;

  constructor(
    readonly router: Router,
    readonly electron: ElectronService,
    readonly cpu: CpuService,
  ) {
    super(router, electron);

    this.colors$ = this.cpu.cpus$.pipe(
      map(cpus => Object.keys(cpus)),
      map(keys => keys.map(() => getRandomColor())),
      map(colors => ({
        domain: colors,
      })),
      take(1),
    );

    this.usageLineChart$ = this.cpu.cpus$.pipe(
      map(cpus => {
        const series: MultiSeries = [];
        const keys = Object.keys(cpus);

        for (const key of keys) {
          series.push({
            name: `CPU ${+key + 1}`,
            series: cpus[+key].map(v => ({
              name: new Date(v.createdAt).toLocaleString(),
              value: v.load,
            })),
          });
        }

        return series;
      }),
    );
  }

  onSubscription(cpu: ICurrentLoad) {
    this.cpu.add(cpu);
  }
}
