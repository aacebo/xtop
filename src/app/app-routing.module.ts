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
    path: 'memory',
    loadChildren: () => import('./pages/memory/memory.module').then(v => v.MemoryModule),
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
