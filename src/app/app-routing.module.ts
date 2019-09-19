import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'processes', pathMatch: 'full' },
  { path: 'processes', loadChildren: () => import('./pages/processes/processes.module').then(v => v.ProcessesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
