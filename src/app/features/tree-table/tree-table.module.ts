import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeTableComponent } from './tree-table.component';

@NgModule({
  declarations: [TreeTableComponent],
  exports: [TreeTableComponent],
  imports: [CommonModule],
})
export class TreeTableModule { }
