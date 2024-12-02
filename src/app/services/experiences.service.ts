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
    image: 'https://imgs.search.brave.com/N5iBnp7aitDM0eFtsszqZL9hx1XMCcrAoRtUsfg-RBw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXNwYXNjYWxjb21h/bmRpbmkuaXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTcvMDcv/bG9nby1ibGFpc2Ut/cGFzY2FsLTMwMHgy/MTIuanBn',
  }]

  allWorkExperiences: Experience[] = [{
    title: 'Internship',
    company: 'Maggioli S.p.A.',
    location: 'Santarcangelo di Romagna, Italy',
    startDate: 'November 2024',
    endDate: 'On going',
    description: 'University internship at Maggioli S.p.A, italian company that provides software solutions for public administration. I am working in the development team, where I am learning how to develop software in a professional environmentin both front and back end.',
    technologies: [this.skillService.getSkillByName('Angular')!, this.skillService.getSkillByName('Java')!],
    image: 'https://imgs.search.brave.com/qF8Sm_KId7KxZzf4byovsxggo-JNH2UoTP6byl6BWKs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi9kL2RlL0xv/Z28tZ3J1cHBvLW1h/Z2dpb2xpLnN2Zy81/MTJweC1Mb2dvLWdy/dXBwby1tYWdnaW9s/aS5zdmcucG5n',
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
