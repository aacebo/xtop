import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatButtonModule,
  MatListModule,
  MatCheckboxModule,
  MatTabsModule,
} from '@angular/material';

import { ProcessesSettingsComponent } from './components';
import { SettingsDialogComponent } from './settings-dialog.component';

@NgModule({
  declarations: [SettingsDialogComponent, ProcessesSettingsComponent],
  entryComponents: [SettingsDialogComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
})
export class SettingsDialogModule { }
