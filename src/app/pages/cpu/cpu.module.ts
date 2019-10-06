import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CpuComponent } from './cpu.component';
import { CpuRoutingModule } from './cpu-routing.module';

@NgModule({
  declarations: [CpuComponent],
  imports: [
    CommonModule,
    CpuRoutingModule,
  ],
})
export class CpuModule { }
