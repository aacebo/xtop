import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(
    readonly router: Router,
    readonly memory: MemoryService,
    readonly electron: ElectronService,
  ) { super(router, electron); }

  onSubscription(mem: IMemory) {
    this.memory.add(mem);
  }
}
