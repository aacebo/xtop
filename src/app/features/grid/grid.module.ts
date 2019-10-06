import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridColumnComponent, GridRowComponent } from './components';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [GridRowComponent, GridColumnComponent, GridComponent],
  exports: [GridRowComponent, GridColumnComponent, GridComponent],
  imports: [CommonModule],
})
export class GridModule { }
