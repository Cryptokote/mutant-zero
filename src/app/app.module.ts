import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProjectsListModule} from './projects-list/projects-list.module';
import { DevelopmentBonusComponent } from './development-bonus/development-bonus.component';
import { ZoneMapComponent } from './zone-map/zone-map.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ZoneMapComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    ProjectsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
