import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ResourcesModule } from './resources';
import { SidenavModule } from './features/sidenav';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    StoreModule.forRoot({ }),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
      maxAge: 20
    }),

    AppRoutingModule,
    ResourcesModule,
    SidenavModule
  ]
})
export class AppModule { }
