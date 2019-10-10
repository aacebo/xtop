import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { PageTemplate } from '../../core/templates';
import { ElectronService } from '../../core/services';
import { NetworkInterfaceService, INetworkInterfacesStats } from '../../resources/network-interface';

@Component({
  selector: 'app-network-interface',
  templateUrl: './network-interface.component.html',
  styleUrls: ['./network-interface.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NetworkInterfaceComponent extends PageTemplate {
  constructor(
    readonly router: Router,
    readonly electron: ElectronService,
    readonly networkInterface: NetworkInterfaceService,
  ) { super(router, electron); }

  onSubscription(stats: INetworkInterfacesStats) {
    this.networkInterface.add(stats);
  }
}
