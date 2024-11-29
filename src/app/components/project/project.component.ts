import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project';

/**
 * Component representing a project.
 * 
 * @selector 'app-project'
 * @imports [CommonModule]
 * @templateUrl './project.component.html'
 * @styleUrl './project.component.scss'
 */
@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  /**
   * The project to display.
   */
  @Input() project!: Project;
}
