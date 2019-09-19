import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ISidenavItem } from './sidenav-item.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  @Input() items: ISidenavItem[] = [];
}
