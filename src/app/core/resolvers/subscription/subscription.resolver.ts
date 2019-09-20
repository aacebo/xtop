import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { ElectronService } from '../../services/electron';
import { ROUTE_SUBSCRIPTIONS } from './route-subscriptions.constant';

@Injectable()
export class SubscriptionResolver implements Resolve<void> {
  private _map: string[];

  constructor(private readonly _electron: ElectronService) { }

  resolve(route: ActivatedRouteSnapshot) {
    if (this._map) {
      for (const sub of this._map) {
        this._electron.send(`${sub}.unsubscribe`);
      }
    }

    this._map = ROUTE_SUBSCRIPTIONS[route.url.join('/')];

    if (this._map) {
      for (const sub of this._map) {
        this._electron.send(`${sub}.subscribe`);
      }
    }
  }
}
