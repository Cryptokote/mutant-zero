import { Component, OnInit } from '@angular/core';
import {CURRENT_DEV_LVL, FINISHED_PROJECTS, PROJECTS, PROJECTS_IN_PROGRESS} from '../dataFiles/projects.data';
import {Devs, ExpandedProject, Project, StartedProject} from '../dataFiles/data.types';
import {ProjectListService} from './project-list.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {
  private projectsList: Array<Project> = PROJECTS;
  private finishedProjects: Array<string>;           // FINISHED_PROJECTS;
  private projectsInProgress: StartedProject;        // PROJECTS_IN_PROGRESS;
  public currentDevLvl: Devs;                       // CURRENT_DEV_LVL;
  public projectsListExpanded: Array<ExpandedProject>;
  public filteredProjectList: Array<ExpandedProject>;
  public filter = 'ALL';
  public filterDevBonus = '';
  public openedProject: ExpandedProject;
  constructor(private projectsService: ProjectListService) { }

  ngOnInit() {
    this.projectsService.getProjectsData().subscribe((projectsData) => {
      console.log(projectsData);
      this.finishedProjects = projectsData.finishedProjects.finishedProjectsList;
      this.currentDevLvl = projectsData.currentDevLvl;
      this.projectsInProgress = projectsData.startedProjects;
      this.initProjectsList();
    });
  }

  initProjectsList() {
    this.projectsListExpanded = [...this.projectsList];
    this.projectsListExpanded.forEach(project => {
      if (this.finishedProjects.find(name => name === project.name)) {
        project.isFinished = true;
      } else if (this.projectsInProgress[project.name] !== undefined) {
        project.isInWork = true;
        project.work_points_completed = this.projectsInProgress[project.name];
      } else if (!project.dev_req || this.devReqSatisfied(project)) {
        project.isAvailable = true;
      }
      this.filteredProjectList = [...this.projectsListExpanded];
    });
  }

  private devReqSatisfied(project: ExpandedProject): boolean {
    if (!project.dev_req) {
      return true;
    }
    const requirementsKeys = Object.keys(project.dev_req);
    let isSatisfied = true;
    requirementsKeys.forEach(reqKey => {
      if (project.dev_req[reqKey] > this.currentDevLvl[reqKey]) {
        isSatisfied = false;
      }
    });
    return isSatisfied;
  }

  filterProjectsList(filterValue: string, devBonus: string = '') {
    this.filter = filterValue;
    this.filterDevBonus = devBonus;
    switch (this.filter) {
      case 'ALL':
        this.filteredProjectList = [...this.projectsListExpanded];
        break;
      case 'NO_COMPLETED':
        this.filteredProjectList = this.projectsListExpanded.filter(proj => !proj.isFinished);
        break;
      case 'COMPLETED':
        this.filteredProjectList = this.projectsListExpanded.filter(proj => proj.isFinished);
        break;
      case 'AVAILABLE':
        this.filteredProjectList = this.projectsListExpanded.filter(proj => proj.isAvailable || proj.isInWork || proj.isFinished);
        break;
      case 'IN_PROGRESS':
        this.filteredProjectList = this.projectsListExpanded.filter(proj => proj.isInWork);
        break;
      case 'DEV_BONUS':
        console.log(1);
        this.filteredProjectList = this.projectsListExpanded.filter(proj => proj.dev_bonus && proj.dev_bonus[devBonus] && !proj.isFinished);
        break;
    }
  }

  openDesctiption(proj: ExpandedProject) {
    this.openedProject = this.openedProject === proj ? null : proj;
  }
}

