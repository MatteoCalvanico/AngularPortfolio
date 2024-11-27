import { inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  skillService: SkillsService = inject(SkillsService);

  //Template:
  /*
    {
      name: '',
      description: '',
      githubUrl: '',
      otherUrls: [],
      technologies: [],
      image: ''
    },
  */
  
  // TODO: use a json file to store the projects
  allProjects: Project[] = [
    {
      name: 'Game Vault',
      description: 'Android app for tracking your game collection, with rating and search capabilities',
      githubUrl: 'https://github.com/MatteoCalvanico/Mobile24-CalvanicoMonti-GameVault',
      otherUrls: [{url: 'https://play.google.com/store/apps/details?id=it.unibo.gamevault', title: 'Available on Google Play'}],
      technologies: [this.skillService.getSkillByName('Kotlin')!],
      image: 'https://play-lh.googleusercontent.com/IuFyA-Mq5p46X8Ct-3D6ltn0Nr8W2rvPdqDodIlmmXluBq4tHYFaM2LT3FMIb_K6Fw=w240-h480-rw'
    },
  ]

  getAllProjects(): Project[] {
    return this.allProjects;
  }

  getProjectByName(name: string): Project | undefined {
    return this.allProjects.find(project => project.name === name);
  }
}
