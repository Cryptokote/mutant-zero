import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';
import {DevelopmentBonusComponent} from '../development-bonus/development-bonus.component';

@NgModule({
  declarations: [ProjectsListComponent, DevelopmentBonusComponent],
  imports: [
    CommonModule
  ],
  exports: [DevelopmentBonusComponent]
})
export class ProjectsListModule { }
