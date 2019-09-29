import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';

import { IContextMenuOption } from './context-menu-option.interface';

export class ContextMenuRef {
  private readonly _closed = new Subject<IContextMenuOption>();
  get closed() {
    return this._closed.asObservable().pipe(take(1));
  }

  constructor(
    private readonly _overlayRef: OverlayRef,
  ) {
    this._overlayRef.backdropClick()
                    .pipe(take(1))
                    .subscribe(() => this.dismiss());
  }

  dismiss(o?: IContextMenuOption) {
    this._closed.next(o);
    this._overlayRef.detach();
  }
}
