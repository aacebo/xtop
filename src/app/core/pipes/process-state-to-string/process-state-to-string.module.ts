import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessStateToStringPipe } from './process-state-to-string.pipe';

@NgModule({
  declarations: [ProcessStateToStringPipe],
  exports: [ProcessStateToStringPipe],
  imports: [CommonModule],
})
export class ProcessStateToStringModule { }
