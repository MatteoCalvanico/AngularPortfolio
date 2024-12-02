import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Experience } from '../../interfaces/experience';
import { ExperiencesService } from '../../services/experiences.service';

/**
 * @component ExperienceComponent
 * @selector app-experience
 * @description
 * The ExperienceComponent is responsible for displaying the user's professional experience.
 * It uses the template defined in `experience.component.html` and the styles in `experience.component.scss`.
 */
@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent{
  @Input() exp!: Experience;
}
