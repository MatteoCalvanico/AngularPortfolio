import { Component, inject, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import anime from 'animejs/lib/anime.es.js';

// Components
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillComponent } from '../skill/skill.component';
import { ProjectComponent } from '../project/project.component';
import { BashComponent } from '../bash/bash.component';

// Interfaces
import { Project } from '../../interfaces/project';
import { Skill } from '../../interfaces/skill';
import { Experience } from '../../interfaces/experience';

// Services
import { ExperiencesService } from '../../services/experiences.service';
import { ProjectsService } from '../../services/projects.service';
import { SkillsService } from '../../services/skills.service';
import { ContactsComponent } from "../contacts/contacts.component";

/**
 * The main component of the Angular application.
 * 
 * @component
 * @selector app-root
 * @imports CommonModule, PersonalInfoComponent, BashComponent, ExperienceComponent, SkillComponent, ProjectComponent
 * @templateUrl ./app.component.html
 * @styleUrls ./app.component.scss
 */
@Component({
  selector: 'app-root',
  imports: [CommonModule, PersonalInfoComponent, BashComponent, ExperienceComponent, SkillComponent, ProjectComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  /**
   * Service to manage experiences.
   */
  experiencesService: ExperiencesService = inject(ExperiencesService);

  /**
   * Service to manage projects.
   */
  projectsService: ProjectsService = inject(ProjectsService);

  /**
   * Service to manage skills.
   */
  skillsService: SkillsService = inject(SkillsService);

  /**
   * List of all projects.
   */
  projects: Project[] = [];

  /**
   * List of currently visible projects.
   */
  visibleProjects: Project[] = [];

  /**
   * List of all skills.
   */
  skills: Skill[] = [];

  /**
   * List of all experiences.
   */
  eduExperiences: Experience[] = [];
  workExperiences: Experience[] = [];

  /**
   * Flag to indicate whether to show all projects.
   */
  showAllProjects: boolean = false;

  /**
   * Current index of the visible projects.
   */
  currentIndex: number = 0;

  /**
   * Number of projects to show at a time.
   */
  projectsToShow: number = 3;

  /**
   * Constructor to initialize the component.
   * Fetches all projects and skills, and updates the visible projects.
   */
  constructor() {
    this.projects = this.projectsService.getAllProjects();
    this.skills = this.skillsService.getAllSkills();
    this.eduExperiences = this.experiencesService.allEduExperiences;
    this.workExperiences = this.experiencesService.allWorkExperiences;
    
    this.updateVisibleProjects();
    window.addEventListener('resize', this.updateProjectsToShow.bind(this));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateVisibleProjects();
  }

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * Initializes the wave animation and hover animations for buttons.
   */
  ngOnInit() {
    // Wave animation paths
    const wave1 = "M0 108.306L50 114.323C100 120.34 200 132.374 300 168.476C400 204.578 500 264.749 600 246.698C700 228.647 800 132.374 900 108.306C1000 84.2382 1100 132.374 1150 156.442L1200 180.51V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V108.306Z",
          wave2 = "M0 250L50 244.048C100 238.095 200 226.19 300 226.19C400 226.19 500 238.095 600 232.143C700 226.19 800 202.381 900 196.429C1000 190.476 1100 202.381 1150 208.333L1200 214.286V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
          wave3 = "M0 250L50 238.095C100 226.19 200 202.381 300 166.667C400 130.952 500 83.3333 600 101.19C700 119.048 800 202.381 900 214.286C1000 226.19 1100 166.667 1150 136.905L1200 107.143V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V250Z",
          wave4 = "M0 125L50 111.111C100 97.2222 200 69.4444 300 97.2222C400 125 500 208.333 600 236.111C700 263.889 800 236.111 900 229.167C1000 222.222 1100 236.111 1150 243.056L1200 250V0H1150C1100 0 1000 0 900 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0H0V125Z";

    // Initialize wave animation
    anime({
      targets: '.wave-top > path',
      easing: 'linear',
      duration: 15000,
      loop: true,
      d: [
        { value: [wave1, wave2] },
        { value: wave3 },
        { value: wave4 },
        { value: wave1 },
      ],
    });

    // Add hover animations to buttons
    this.addHoverAnimation('aboutMeButton');

    // Update the number of projects to show based on the current window width
    this.updateProjectsToShow();
  }

  /**
   * Updates the number of projects to show based on the current window width.
   * If the window width is less than 768 pixels, it sets the number of projects to show to 1.
   * Otherwise, it sets the number of projects to show to 3.
   * After updating the number of projects to show, it calls the `updateVisibleProjects` method
   * to refresh the visible projects.
   */
  updateProjectsToShow() {
    if (window.innerWidth < 768) {
      this.projectsToShow = 1;
    } else {
      this.projectsToShow = 3;
    }
    this.updateVisibleProjects();
  }

  /**
   * Checks if the user can navigate to the next set of projects.
   * 
   * @returns True if the user can navigate to the next set of projects, otherwise false.
   */
  canGoNext(): boolean {
    return this.currentIndex < this.projects.length - this.projectsToShow;
  }

  /**
   * Checks if the user can navigate to the previous set of projects.
   * 
   * @returns True if the user can navigate to the previous set of projects, otherwise false.
   */
  canGoPrev(): boolean {
    return this.currentIndex > 0;
  }

  /**
   * Updates the list of visible projects based on the current index and number of projects to show.
   */
  updateVisibleProjects() {
    this.visibleProjects = this.projects.slice(this.currentIndex, this.currentIndex + this.projectsToShow);
  }

  /**
   * Navigates to the previous project if possible and updates the visible projects.
   */
  prevProject() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleProjects();
    }
  }

  /**
   * Navigates to the next project if possible and updates the visible projects.
   */
  nextProject() {
    if (this.currentIndex < this.projects.length - this.projectsToShow) {
      this.currentIndex++;
      this.updateVisibleProjects();
    }
  }

  /**
   * Adds hover animation to a button with the given ID.
   * 
   * @param buttonId The ID of the button to add the hover animation to.
   */
  addHoverAnimation(buttonId: string) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('mouseenter', () => {
        anime({
          targets: `#${buttonId}`,
          scale: 1.2,
          duration: 300,
          easing: 'easeInOutQuad'
        });
      });

      button.addEventListener('mouseleave', () => {
        anime({
          targets: `#${buttonId}`,
          scale: 1,
          duration: 300,
          easing: 'easeInOutQuad'
        });
      });
    }
  }
}