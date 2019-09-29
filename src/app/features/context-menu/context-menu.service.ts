import { Injectable, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { take } from 'rxjs/operators';

import { IContextMenuOption } from './context-menu-option.interface';
import { ContextMenuComponent } from './context-menu.component';
import { CONTEXT_MENU_OPTIONS } from './context-menu-options.constant';
import { ContextMenuRef } from './context-menu-ref.class';

@Injectable({
  providedIn: 'root',
})
export class ContextMenuService {
  constructor(
    private readonly _overlay: Overlay,
    private readonly _injector: Injector,
  ) {}

  open(
    options: IContextMenuOption[],
    x: number,
    y: number,
  ) {
    const overlayRef = this._overlay.create({
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      positionStrategy: this._getPositionStrategy(x, y),
    });

    const cmRef = new ContextMenuRef(overlayRef);
    const portal = new ComponentPortal(ContextMenuComponent, undefined, this._getInjector(options, cmRef));
    overlayRef.attach(portal);

    return cmRef;
  }

  private _getInjector(options: IContextMenuOption[], cmRef: ContextMenuRef) {
    const tokens = new WeakMap();

    tokens.set(ContextMenuRef, cmRef);
    tokens.set(CONTEXT_MENU_OPTIONS, options);

    return new PortalInjector(this._injector, tokens);
  }

  private _getPositionStrategy(x: number, y: number) {
    return this._overlay.position()
                        .global()
                        .left(`${x}px`)
                        .top(`${y}px`);
  }
}
