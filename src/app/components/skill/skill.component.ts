import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import anime from 'animejs/lib/anime.es.js';

import { SkillsService } from '../../services/skills.service';
import { Skill } from '../../interfaces/skill';

@Component({
  selector: 'app-skill',
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit, AfterViewInit {
  skills: Skill[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skills = this.skillsService.getAllSkills();
  }

  ngAfterViewInit(): void {
    this.animateSkills();
  }

  animateSkills(): void {
    const container = document.querySelector('.skills-container');
    const skillElements = document.querySelectorAll('.skill');
    const totalWidth = Array.from(skillElements).reduce((acc, el) => acc + el.clientWidth + 20, 0); // 20 is the margin

    if (container) {
      // Duplicate the skills to create a seamless loop
      container.innerHTML += container.innerHTML;

      anime({
        targets: '.skills-container',
        translateX: [0, -totalWidth],
        duration: 500000,
        easing: 'linear',
        loop: true,
        update: function(anim) {
          const firstSkill = container.querySelector('.skill');
          if (firstSkill && firstSkill.getBoundingClientRect().right < 0) {
            container.appendChild(firstSkill);
            anim.restart();
          }
        }
      });
    }
  }
}