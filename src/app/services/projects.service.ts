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
      technologies: [this.skillService.getSkillByName('')!],
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
      technologies: [this.skillService.getSkillByName('Kotlin')!, this.skillService.getSkillByName('Gradle')!, this.skillService.getSkillByName('Android Studio')!],
      image: 'https://github.com/MatteoCalvanico/Mobile24-CalvanicoMonti-GameVault/blob/main/readmeImg/landscape.png?raw=true'
    },
    {
      name: 'Virtual Casinò',
      description: 'Desktop application in Java simulating some casino games, such as Blackjack, Roulette, and dice.',
      githubUrl: 'https://github.com/MatteoCalvanico/pss23-Calvanico-Monti-Ghinelli-VirtualCasino',
      technologies: [this.skillService.getSkillByName('Java')!, this.skillService.getSkillByName('Gradle')!],
      image: 'https://github.com/MatteoCalvanico/pss23-Calvanico-Monti-Ghinelli-VirtualCasino/blob/master/src/main/resources/sprite/screenshot/logo.png?raw=true'
    },
    {
      name: 'GetEat',
      description: 'Simple web app for manage restaurants',
      githubUrl: 'https://github.com/MatteoCalvanico/GetEat',
      otherUrls: [],
      technologies: [this.skillService.getSkillByName('Vue.js')!, this.skillService.getSkillByName('HTML5')!, this.skillService.getSkillByName('Saas')!, this.skillService.getSkillByName('Express.js')!, this.skillService.getSkillByName('Bootstrap')!, this.skillService.getSkillByName('TypeScript')!],
      image: 'https://github.com/MatteoCalvanico/GetEat/blob/main/frontend/public/logo.png?raw=true'
    },
  ]

  getAllProjects(): Project[] {
    return this.allProjects;
  }

  getProjectByName(name: string): Project | undefined {
    return this.allProjects.find(project => project.name === name);
  }
}
