import { Injectable, inject } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {

  skillService: SkillsService = inject(SkillsService);

  //Template:
  /*  
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
      technologies: [],
      image: ''
  \]
  */


  allEduExperiences: Experience[] = [{
    title: 'Bachelor\'s Degree in Computed System Technologies',
    company: 'University of Bologna',
    location: 'Cesena, Italy',
    startDate: '2022',
    endDate: 'On going',
    description: 'I am currently studying Computer Science at the University of Bologna. I have completed courses on programming (OOP, Mobile, Web, ecc), algorithms & data structures, databases, software engineering, machine learning, IoT, Network Systems and much more.',
    technologies: this.skillService.getAllSkillsExcept(['Godot', 'Angular', 'C++', 'React']),
    image: 'https://www.unibo.it/it/immagini/1_UNIBO_Ateneo_vert_pos.jpg/@@images/cc65c983-07a0-4359-add5-69104bcde471.png',
  }, 
  {
    title: 'High School Diploma in Computer Science and Telecommunication Systems',
    company: 'ITT Blaise Pascal',
    location: 'Cesena, Italy',
    startDate: '2017',
    endDate: '2022',
    description: 'I have completed the high school with a specialization in Computer Science and Telecommunication Systems. I have studied the basics of programming, networking, electronics, and much more.',
    technologies: [this.skillService.getSkillByName('C#')!, this.skillService.getSkillByName('DotNet')!, this.skillService.getSkillByName('HTML5')!, this.skillService.getSkillByName('CSS')!, this.skillService.getSkillByName('JavaScript')!, this.skillService.getSkillByName('MySQL')!],
    image: 'https://raw.githubusercontent.com/MatteoCalvanico/AngularPortfolio/58fe65e2175b295405fb592df3c1cd39613dd2c1/src/app/assets/pascal.png',
  }]

  allWorkExperiences: Experience[] = [{
    title: 'Internship',
    company: 'Maggioli S.p.A.',
    location: 'Santarcangelo di Romagna, Italy',
    startDate: 'November 2024',
    endDate: 'On going',
    description: 'University internship at Maggioli S.p.A, italian company that provides software solutions for public administration. I am working in the development team, where I am learning how to develop software in a professional environmentin both front and back end.',
    technologies: [this.skillService.getSkillByName('Angular')!, this.skillService.getSkillByName('Java')!],
    image: 'https://raw.githubusercontent.com/MatteoCalvanico/AngularPortfolio/58fe65e2175b295405fb592df3c1cd39613dd2c1/src/app/assets/maggioli.png',
  }]


  /**
   * Retrieves all educational experiences.
   *
   * @returns {Experience[]} An array of educational experiences.
   */
  getAllEduExperiences(): Experience[] {
    return this.allEduExperiences;
  }

  /**
   * Retrieves all work experiences.
   *
   * @returns {Experience[]} An array of all work experiences.
   */
  getAllWorkExperiences(): Experience[] {
    return this.allWorkExperiences;
  }
}
