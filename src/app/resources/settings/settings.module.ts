import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './settings.state';
import { SettingsEffects } from './settings.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('settings', reducers),
    EffectsModule.forFeature([SettingsEffects]),
  ],
})
export class SettingsModule { }
