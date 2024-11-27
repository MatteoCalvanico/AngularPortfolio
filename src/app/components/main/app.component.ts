import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';

// Components
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillComponent } from '../skill/skill.component';
import { ProjectComponent } from '../project/project.component';

// Interfaces
import { Project } from '../../interfaces/project';
import { Skill } from '../../interfaces/skill';
import { Experience } from '../../interfaces/experience';

// Services
import { ExperiencesService } from '../../services/experiences.service';
import { ProjectsService } from '../../services/projects.service';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PersonalInfoComponent, ExperienceComponent, SkillComponent, ProjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  projectsService: ProjectsService = inject(ProjectsService);
  skillsService: SkillsService = inject(SkillsService);
  experiencesService: ExperiencesService = inject(ExperiencesService);

  projects: Project[] = [];
  skills: Skill[] = [];
  experiences: Experience[] = [];

  constructor() {
    this.projects = this.projectsService.getAllProjects();
    this.skills = this.skillsService.getAllSkills();
    /*this.experiences = this.experiencesService.getAllExperiences();*/
  }
}
