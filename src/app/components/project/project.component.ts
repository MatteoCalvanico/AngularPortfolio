import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  @Input() project!: Project;
}
