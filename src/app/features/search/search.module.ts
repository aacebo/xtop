import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';

import { SearchDialogComponent } from './search-dialog.component';

@NgModule({
  declarations: [SearchDialogComponent],
  entryComponents: [SearchDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule],
})
export class SearchModule { }
