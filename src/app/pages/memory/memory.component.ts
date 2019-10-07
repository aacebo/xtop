import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SingleSeries, MultiSeries } from '@swimlane/ngx-charts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PageTemplate } from '../../core/templates';
import { ElectronService } from '../../core/services';
import { MemoryService, IMemory } from '../../resources/memory';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemoryComponent extends PageTemplate {
  readonly usagePieChart$: Observable<SingleSeries>;
  readonly swapPieChart$: Observable<SingleSeries>;
  readonly usageLineChart$: Observable<MultiSeries>;
  readonly colors = { domain: ['#FF0000', '#00FF00'] };

  constructor(
    readonly router: Router,
    readonly electron: ElectronService,
    readonly memory: MemoryService,
  ) {
    super(router, electron);

    this.usagePieChart$ = this.memory.entity$.pipe(
      map(m => m ? [{
        name: '% Memory Used',
        value: Math.round((m.used / m.total) * 100),
      }, {
        name: '% Memory Free',
        value: Math.round((m.free / m.total) * 100),
      }] : []),
    );

    this.swapPieChart$ = this.memory.entity$.pipe(
      map(m => m ? [{
        name: '% Swap Used',
        value: Math.round((m.swapused / m.swaptotal) * 100),
      }, {
        name: '% Swap Free',
        value: Math.round((m.swapfree / m.swaptotal) * 100),
      }] : []),
    );

    this.usageLineChart$ = this.memory.entities$.pipe(
      map(m => (m && m.length > 0) ? m.map(v => ({
        name: new Date(v.createdAt).toLocaleString(),
        value: Math.round((v.used / v.total) * 100),
      })) : []),
      map(e => [{
        name: '% Memory Used',
        series: e,
      }]),
    );
  }

  onSubscription(mem: IMemory) {
    this.memory.add(mem);
  }
}
