import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriorityToStringPipe } from './priority-to-string.pipe';

@NgModule({
  declarations: [PriorityToStringPipe],
  exports: [PriorityToStringPipe],
  imports: [CommonModule],
})
export class PriorityToStringModule { }
