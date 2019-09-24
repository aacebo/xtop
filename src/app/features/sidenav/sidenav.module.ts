import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatBadgeModule,
} from '@angular/material';

import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [SidenavComponent],
  exports: [SidenavComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule,
  ],
})
export class SidenavModule { }
