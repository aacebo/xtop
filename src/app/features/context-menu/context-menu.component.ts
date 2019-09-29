import { Component, ChangeDetectionStrategy, Inject } from '@angular/core';

import { CONTEXT_MENU_OPTIONS } from './context-menu-options.constant';
import { IContextMenuOption } from './context-menu-option.interface';
import { ContextMenuRef } from './context-menu-ref.class';

@Component({
  selector: 'app-context-menu',
  templateUrl: './context-menu.component.html',
  styleUrls: ['./context-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {
  constructor(
    @Inject(CONTEXT_MENU_OPTIONS) readonly options: IContextMenuOption[],
    private readonly _cmRef: ContextMenuRef,
  ) { }

  select(o: IContextMenuOption) {
    this._cmRef.dismiss(o);
  }
}
