import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { SingleSeries, Series, MultiSeries } from '@swimlane/ngx-charts';
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
  readonly pieChart$: Observable<SingleSeries>;
  readonly lineChart$: Observable<MultiSeries>;
  readonly colors = { domain: ['#8b0000', '#008000'] };

  constructor(
    readonly router: Router,
    readonly electron: ElectronService,
    readonly memory: MemoryService,
  ) {
    super(router, electron);

    this.pieChart$ = this.memory.memory$.pipe(
      map(m => m ? [{
        name: '% Memory Usage',
        value: 100 - m.freeMemPercentage,
      }, {
        name: '% Memory Free',
        value: m.freeMemPercentage,
      }] : []),
    );

    this.lineChart$ = this.memory.entities$.pipe(
      map(m => (m && m.length > 0) ? m.map(v => ({
        name: new Date(v.createdAt).toLocaleString(),
        value: v.usedMemMb,
      })) : []),
      map(e => [{
        name: 'Memory Usage (MB)',
        series: e,
      }]),
    );
  }

  onSubscription(mem: IMemory) {
    this.memory.add(mem);
  }
}
