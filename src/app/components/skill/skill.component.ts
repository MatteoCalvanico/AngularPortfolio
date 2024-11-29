import { Component, OnInit, AfterViewInit, isDevMode } from '@angular/core';
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

  /**
   * Animates the skills container to create a seamless scrolling effect.
   * 
   * This function duplicates the content of the skills container to create a continuous loop of skills.
   * It uses the Anime.js library to animate the horizontal translation of the container.
   * The animation restarts when the first skill element moves out of view.
   * 
   * The function also manages the visibility of skill elements by adding or removing the 'visible' class
   * based on their position within the viewport.
   * 
   * @remarks
   * - The function assumes that each skill element has a class of 'skill' and the container has a class of 'skills-container'.
   * - The animation duration is set to 1200000 milliseconds (20 minutes) for a smooth scrolling effect.
   * - The function initially adds the 'visible' class to all skill elements that are in view.
   * 
   * @example
   * ```typescript
   * // Call the animateSkills function to start the animation
   * this.animateSkills();
   * ```
   */
  animateSkills(): void {
    const container = document.querySelector('.skills-container') as HTMLElement;
    const skillElements = document.querySelectorAll('.skill');
    const totalWidth = Array.from(skillElements).reduce((acc, el) => acc + (el as HTMLElement).clientWidth + 20, 0); // 20 is the margin
  
    if (container) {
      // Duplicate the skills to create a seamless loop
      container.innerHTML += container.innerHTML;
  
      anime({
        targets: '.skills-container',
        translateX: [0, -totalWidth],
        duration: isDevMode() ? 1200000 : 30000, // 20 minutes in dev mode, 30 seconds otherwise
        easing: 'linear',
        loop: true,
        update: function(anim) {
          const firstSkill = container.querySelector('.skill');
          if (firstSkill && firstSkill.getBoundingClientRect().right < 0) {
            container.appendChild(firstSkill);
            firstSkill.classList.remove('visible'); // Remove visible class
            setTimeout(() => {
              firstSkill.classList.add('visible'); // Re-add visible class after a short delay
            }, 50);
            anim.restart();
          }
  
          // Check visibility of each skill and update opacity
          document.querySelectorAll('.skill').forEach(skill => {
            const rect = (skill as HTMLElement).getBoundingClientRect();
            if (rect.left >= 0 && rect.right <= window.innerWidth) {
              skill.classList.add('visible');
            } else {
              skill.classList.remove('visible');
            }
          });
        }
      });
    }
  }
}