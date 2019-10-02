import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResourcesModule } from './resources';
import { environment } from '../environments/environment';

import { SidenavModule } from './features/sidenav';
import { ToolbarModule } from './features/toolbar';
import { ContextMenuModule } from './features/context-menu';
import { SearchModule } from './features/search';
import { ConfirmDialogModule } from './features/confirm-dialog';
import { SettingsDialogModule } from './features/settings-dialog';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    StoreModule.forRoot({ }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 20,
    }),

    AppRoutingModule,
    ResourcesModule,
    SidenavModule,
    ToolbarModule,
    ContextMenuModule,
    SearchModule,
    ConfirmDialogModule,
    SettingsDialogModule,
  ],
})
export class AppModule { }
