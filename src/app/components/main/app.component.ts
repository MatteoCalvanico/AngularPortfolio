import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import type { SwiperOptions } from 'swiper/types';

import { Experience } from '../../interfaces/experience';
import { Project } from '../../interfaces/project';
import { ExperiencesService } from '../../services/experiences.service';
import { ProjectsService } from '../../services/projects.service';
import { BashComponent } from '../bash/bash.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { ExperienceComponent } from '../experience/experience.component';
import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { ProjectComponent } from '../project/project.component';
import { SkillComponent } from '../skill/skill.component';

type SwiperElement = HTMLElement & SwiperOptions & { initialize: () => void };

@Component({
  selector: 'app-root',
  imports: [CommonModule, PersonalInfoComponent, BashComponent, ExperienceComponent, SkillComponent, ProjectComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('projectsSwiper') private projectsSwiper!: ElementRef<SwiperElement>;

  private readonly experiencesService = inject(ExperiencesService);
  private readonly projectsService = inject(ProjectsService);

  projects: Project[] = this.projectsService.getAllProjects();
  experiences: Experience[] = [
    ...this.experiencesService.getAllWorkExperiences(),
    ...this.experiencesService.getAllEduExperiences()
  ].sort((first, second) => second.order - first.order);

  ngOnInit(): void {
    this.animateWave();
  }

  ngAfterViewInit(): void {
    Object.assign(this.projectsSwiper.nativeElement, {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: { nextEl: '.project-next', prevEl: '.project-prev' },
      breakpoints: { 821: { slidesPerView: 3 } }
    } satisfies SwiperOptions);
    this.projectsSwiper.nativeElement.initialize();
  }

  private animateWave(): void {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const wave1 = 'M0 160C100 120 200 220 300 180C400 140 500 90 600 140C700 190 800 190 900 150C1000 110 1100 120 1200 160V0H0V160Z';
    const wave2 = 'M0 160C100 210 200 100 300 150C400 200 500 190 600 130C700 70 800 120 900 175C1000 230 1100 100 1200 160V0H0V160Z';
    const wave3 = 'M0 160C100 100 200 130 300 190C400 250 500 220 600 160C700 100 800 80 900 125C1000 170 1100 210 1200 160V0H0V160Z';

    anime({
      targets: '.wave-top > path',
      easing: 'linear',
      duration: 12000,
      loop: true,
      d: [
        { value: [wave1, wave2] },
        { value: wave3 },
        { value: wave1 }
      ]
    });
  }
}
