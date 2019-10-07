import { OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { ElectronService } from '../../services';

export class PageTemplate implements OnInit, OnDestroy {
  get routeName() {
    return this.router.url.replace('/', '');
  }

  constructor(
    protected readonly router: Router,
    protected readonly electron: ElectronService,
  ) { }

  ngOnInit() {
    document.title = `XTop - ${this.routeName.toUpperCase().replace('-', ' ')}`;
    this.electron.on(this.routeName, this.onSubscription.bind(this));
  }

  ngOnDestroy() {
    this.electron.removeAllListeners(this.routeName);
  }

  onSubscription(..._: any[]) { }
}
