import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NetworkInterfaceComponent } from './network-interface.component';
import { NetworkInterfaceRoutingModule } from './network-interface-routing.module';

@NgModule({
  declarations: [NetworkInterfaceComponent],
  imports: [
    CommonModule,
    NetworkInterfaceRoutingModule,
  ],
})
export class NetworkInterfaceModule { }
