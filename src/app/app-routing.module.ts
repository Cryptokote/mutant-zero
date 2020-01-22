import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectsListComponent} from './projects-list/projects-list.component';
import {ZoneMapComponent} from './zone-map/zone-map.component';


const routes: Routes = [
  {path: '',    component: ProjectsListComponent, pathMatch: 'full'},
  {path: 'map', component: ZoneMapComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
