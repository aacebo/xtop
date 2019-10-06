import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { PageTemplate } from '../../core/templates';
import { ElectronService } from '../../core/services';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpuComponent extends PageTemplate implements AfterViewInit {
  constructor(
    readonly router: Router,
    readonly electron: ElectronService,
  ) { super(router, electron); }

  ngAfterViewInit() {
    this.electron.on('cpu', (cpu) => console.log(cpu));
  }
}
