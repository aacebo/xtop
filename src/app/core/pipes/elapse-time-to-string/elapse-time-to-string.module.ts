import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElapseTimeToStringPipe } from './elapse-time-to-string.pipe';

@NgModule({
  declarations: [ElapseTimeToStringPipe],
  exports: [ElapseTimeToStringPipe],
  imports: [CommonModule],
})
export class ElapseTimeToStringModule { }
