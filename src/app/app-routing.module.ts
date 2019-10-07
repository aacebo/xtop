import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubscriptionResolver } from './core/resolvers/subscription';

const routes: Routes = [
  { path: '', redirectTo: 'processes', pathMatch: 'full' },
  {
    path: 'processes',
    loadChildren: () => import('./pages/processes/processes.module').then(v => v.ProcessesModule),
    resolve: {
      subscription: SubscriptionResolver,
    },
  },
  {
    path: 'cpu',
    loadChildren: () => import('./pages/cpu/cpu.module').then(v => v.CpuModule),
    resolve: {
      subscription: SubscriptionResolver,
    },
  },
  {
    path: 'memory',
    loadChildren: () => import('./pages/memory/memory.module').then(v => v.MemoryModule),
    resolve: {
      subscription: SubscriptionResolver,
    },
  },
  {
    path: 'file-system',
    loadChildren: () => import('./pages/file-system/file-system.module').then(v => v.FileSystemModule),
    resolve: {
      subscription: SubscriptionResolver,
    },
  },
  {
    path: 'network-interface',
    loadChildren: () => import('./pages/network-interface/network-interface.module').then(v => v.NetworkInterfaceModule),
    resolve: {
      subscription: SubscriptionResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SubscriptionResolver],
})
export class AppRoutingModule { }
