import { Injectable, inject } from '@angular/core';
import { Experience } from '../interfaces/experience';
import { SkillsService } from './skills.service';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  skillService: SkillsService = inject(SkillsService);

  //Template:
  /*  
      order: 0,
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
      technologies: [],
      image: '',
      website: ''
  \]
  */

  allEduExperiences: Experience[] = [
    {
      order: 4,
      title: "Bachelor's Degree in Computed System Technologies",
      company: 'University of Bologna',
      location: 'Cesena, Italy',
      startDate: '2022',
      endDate: '2025',
      description:
        'I graduated with a Bachelor’s Degree in Computer System Technology from the University of Bologna. During my studies, I explored various topics like algorithms and data structures, embedded systems, web and cloud technologies and much more; combining theoretical understanding with practical, hands-on experience. Through projects, and two different curricular internships (1200+ hours total), I developed technical skills and a problem-solving mindset, preparing me for roles in software development.',
      technologies: this.skillService.getAllSkillsExcept([
        'Godot',
        'Angular',
        'C++',
        'React',
        'Spring',
        'DBeaver',
        'Kong',
        'Fastify',
        'Mongoose',
        'Zod',
      ]),
      image:
        'https://www.unibo.it/it/immagini/1_UNIBO_Ateneo_vert_pos.jpg/@@images/cc65c983-07a0-4359-add5-69104bcde471.png',
      website: 'https://corsi.unibo.it/1cycle/ComputerSystemTechnologies',
    },
    {
      order: 1,
      title:
        'High School Diploma in Computer Science and Telecommunication Systems',
      company: 'ITT Blaise Pascal',
      location: 'Cesena, Italy',
      startDate: '2017',
      endDate: '2022',
      description:
        'I have completed the high school with a specialization in Computer Science and Telecommunication Systems. I have studied the basics of programming, networking, electronics, and much more.',
      technologies: [
        this.skillService.getSkillByName('C#')!,
        this.skillService.getSkillByName('DotNet')!,
        this.skillService.getSkillByName('HTML5')!,
        this.skillService.getSkillByName('CSS')!,
        this.skillService.getSkillByName('JavaScript')!,
        this.skillService.getSkillByName('MySQL')!,
      ],
      image:
        'https://raw.githubusercontent.com/MatteoCalvanico/AngularPortfolio/58fe65e2175b295405fb592df3c1cd39613dd2c1/src/app/assets/pascal.png',
      website: 'https://www.ispascalcomandini.it/itt-b-pascal/',
    },
  ];

  allWorkExperiences: Experience[] = [
    {
      order: 2,
      title: 'Internship',
      company: 'Maggioli S.p.A.',
      location: 'Santarcangelo di Romagna, Italy',
      startDate: 'November 2024',
      endDate: 'March 2025',
      description:
        'University internship at Maggioli S.p.A, italian company that provides software solutions for public administration. \nI worked in the development team, where I learned how to develop software in a professional environment in both front and back end. \nThis experience helped me navigate a consolidated and large code base and working with a large team (even remotely).',
      technologies: [
        this.skillService.getSkillByName('Angular')!,
        this.skillService.getSkillByName('Java')!,
        this.skillService.getSkillByName('Spring')!,
        this.skillService.getSkillByName('DBeaver')!,
      ],
      image:
        'https://raw.githubusercontent.com/MatteoCalvanico/AngularPortfolio/58fe65e2175b295405fb592df3c1cd39613dd2c1/src/app/assets/maggioli.png',
      website: 'https://www.maggioli.com/',
    },
    {
      order: 3,
      title: 'Internship',
      company: 'DMA',
      location: 'Cesena, Italy',
      startDate: 'April 2025',
      endDate: 'August 2025',
      description:
        'University internship where I had the opportunity to study and subsequently apply various technologies for web and cloud development using the AWS suite. The collaboration with the company enabled the development of a control panel, where a customer service operator of a company relying on DMA for its software solutions can monitor the current and past status of different devices used by various consumers; this allows providing targeted and effective support in case of faults or any type of issues. The application, named ECC Dashboard, was used as the basis for my thesis.',
      technologies: [
        this.skillService.getSkillByName('React')!,
        this.skillService.getSkillByName('Kong')!,
        this.skillService.getSkillByName('Mongoose')!,
        this.skillService.getSkillByName('Fastify')!,
        this.skillService.getSkillByName('Zod')!,
        this.skillService.getSkillByName('TypeScript')!,
        this.skillService.getSkillByName('Node.js')!,
        this.skillService.getSkillByName('Docker')!,
        this.skillService.getSkillByName('AWS')!,
      ],
      image: 'https://www.dma.it/hubfs/Sito%20DMA/DMA_Logo.svg',
      website: 'https://www.dma.it/',
    },
  ];

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
