import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectsListModule} from './projects-list/projects-list.module';
import { DevelopmentBonusComponent } from './development-bonus/development-bonus.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProjectsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
