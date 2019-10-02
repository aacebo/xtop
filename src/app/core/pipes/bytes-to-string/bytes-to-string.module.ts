import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BytesToStringPipe } from './bytes-to-string.pipe';

@NgModule({
  declarations: [BytesToStringPipe],
  exports: [BytesToStringPipe],
  imports: [CommonModule],
})
export class BytesToStringModule { }
