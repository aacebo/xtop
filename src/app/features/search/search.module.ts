import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';

import { SearchDialogComponent } from './search-dialog.component';

@NgModule({
  declarations: [SearchDialogComponent],
  entryComponents: [SearchDialogComponent],
  imports: [CommonModule, MatDialogModule],
})
export class SearchModule { }
