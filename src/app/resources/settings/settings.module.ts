import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { reducers } from './settings.state';

@NgModule({
  imports: [
    StoreModule.forFeature('settings', reducers),
  ],
})
export class SettingsModule { }
