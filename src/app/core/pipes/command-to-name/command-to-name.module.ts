import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandToNamePipe } from './command-to-name.pipe';

@NgModule({
  declarations: [CommandToNamePipe],
  exports: [CommandToNamePipe],
  imports: [CommonModule],
})
export class CommandToNameModule { }
