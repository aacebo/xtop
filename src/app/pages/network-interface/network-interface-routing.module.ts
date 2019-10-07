import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NetworkInterfaceComponent } from './network-interface.component';

const routes: Routes = [
  { path: '', component: NetworkInterfaceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NetworkInterfaceRoutingModule { }
