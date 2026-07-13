import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { SwiperOptions } from 'swiper/types';

import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../interfaces/skill';

type SwiperElement = HTMLElement & SwiperOptions & { initialize: () => void };

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SkillComponent implements OnInit, AfterViewInit {
  @ViewChild('skillsSwiper') private skillsSwiper!: ElementRef<SwiperElement>;

  skills: Skill[] = [];
  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getAllSkills();
  }

  ngAfterViewInit(): void {
    Object.assign(this.skillsSwiper.nativeElement, {
      slidesPerView: 'auto',
      spaceBetween: 8,
      loop: true,
      speed: 6000,
      allowTouchMove: true,
      grabCursor: true,
      autoplay: { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, waitForTransition: false },
      freeMode: { enabled: true, momentum: false }
    } satisfies SwiperOptions);
    this.skillsSwiper.nativeElement.initialize();
  }
}
