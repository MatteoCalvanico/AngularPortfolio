import { Injectable } from '@angular/core';
import { Skill, skillCategories } from '../interfaces/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //Template:
  /*
    {
      name: '',
      icon: '',
      type: '',
    },
  */

  // TODO: use a json file to store the skills
  allSkills: Skill[] = [
    {
      name: 'Kotlin',
      icon: 'https://camo.githubusercontent.com/a7d0d2f7bf572263146f83715fdd573dcecc0d71eac72db7e0cc931d48a8a1e7/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6b6f746c696e6c616e672f6b6f746c696e6c616e672d69636f6e2e737667',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Java',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
      type: skillCategories.LANGUAGE,
    },
  ]

  getAllSkills(): Skill[] {
    return this.allSkills;
  }

  getSkillByName(name: string): Skill | undefined {
    return this.allSkills.find(skill => skill.name === name);
  }
}
