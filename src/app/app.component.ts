import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

import { ISidenavItem } from './features/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  readonly navItems: ISidenavItem[] = [
    { icon: 'fas fa-stream', tooltip: 'Processes', route: '/processes' },
    { icon: 'fas fa-memory', tooltip: 'Memory', route: '/memory' }
  ];

  ngOnInit() {
    document.body.classList.add('dark--theme');
  }
}
