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
    {
      name: 'ProtoCRPG',
      description: 'A simple prototype for a CRPG in Godot 4.3, made like a template for other projects',
      githubUrl: 'https://github.com/MatteoCalvanico/ProtoCRPG',
      otherUrls: [],
      technologies: [this.skillService.getSkillByName('Godot')!],
      image: 'https://github.com/MatteoCalvanico/ProtoCRPG/blob/prototype/src/preview.png?raw=true'
    },
    {
      name: 'DoomClone',
      description: 'A simple C++ game similar to Doom and Wolfenstein 3D',
      githubUrl: 'https://github.com/MatteoCalvanico/DoomClone?tab=readme-ov-file',
      otherUrls: [],
      technologies: [this.skillService.getSkillByName('C++')!],
      image: 'https://github.com/MatteoCalvanico/DoomClone/blob/main/output/12-10-24.png?raw=true'
    },
    {
      name: 'EmbeddedProject',
      description: 'A simple IoT project with ESP32 and a Raspberry Pi',
      githubUrl: 'https://github.com/MatteoCalvanico/EmbeddedProject',
      otherUrls: [{url: 'https://wokwi.com/projects/389703246864781313', title: 'Wokwi Simulation'}],
      technologies: [this.skillService.getSkillByName('Arduino')!, this.skillService.getSkillByName('C')!],
      image: '../images/EmbeddedProject.png'
    },
  ]

  getAllProjects(): Project[] {
    return this.allProjects;
  }

  getProjectByName(name: string): Project | undefined {
    return this.allProjects.find(project => project.name === name);
  }
}
