import { Injectable } from '@angular/core';
import { Skill, skillCategories } from '../interfaces/skill';

/**
 * Service to manage skills data.
 * 
 * @remarks
 * This service provides methods to retrieve skills data. The skills data is currently hardcoded
 * but can be moved to a JSON file for better maintainability.
 * 
 * @example
 * ```typescript
 * import { SkillsService } from './skills.service';
 * 
 * const skillsService = new SkillsService();
 * const allSkills = skillsService.getAllSkills();
 * const kotlinSkill = skillsService.getSkillByName('Kotlin');
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //Template:
  /*
    {
      name: '',
      icon: '',
      type: skillCategories.LANGUAGE,
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
    {
      name: 'Gradle',
      icon: 'https://imgs.search.brave.com/G3lEfxdDiVX1g4zKfzJqlGWu3lPS2jjUvxCKC-L-_z4/rs:fit:32:32:1:0/g:ce/aHR0cDovL2Zhdmlj/b25zLnNlYXJjaC5i/cmF2ZS5jb20vaWNv/bnMvYjhhM2VlZGFm/MDExZDg1YzRkZDFi/Y2QyYjVkOGNlMGY3/MTcxYmY1NmZhZGM4/ZDU1Nzk1MjQ3MzY4/NzA5MGFiNi9ncmFk/bGUub3JnLw',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Android Studio',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Arduino',
      icon: 'https://camo.githubusercontent.com/6fcd1c570f8a902233682fea6938ec8e8a3727080ad41312ce5a39004de43087/68747470733a2f2f63646e2e776f726c64766563746f726c6f676f2e636f6d2f6c6f676f732f61726475696e6f2d312e737667',
      type: skillCategories.TOOL,
    },
    {
      name: 'Bootstrap',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'C',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'C++',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'C#',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'CSS',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'DBeaver',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/DBeaver_logo.svg/384px-DBeaver_logo.svg.png',
      type: 'TOOL'
    },
    {
      name: 'DotNet',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Express.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Figma',
      icon: 'https://camo.githubusercontent.com/e5c1b4b7d59d58f0607fede5dd922211257cd09031f3c2370308ab4e34356299/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6669676d612f6669676d612d69636f6e2e737667',
      type: skillCategories.TOOL,
    },
    {
      name: 'Google Cloud',
      icon: 'https://camo.githubusercontent.com/d124825d0e0968226011ee97e6001d44a4844a75cc2a1a058cde8bf7791bea97/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676f6f676c655f636c6f75642f676f6f676c655f636c6f75642d69636f6e2e737667',
      type: skillCategories.TOOL,
    },
    {
      name: 'Git',
      icon: 'https://camo.githubusercontent.com/ff5301ef7472dbdf522b776167a8af8c326299fe8175e53f6b052bbcc04533e3/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6769742d73636d2f6769742d73636d2d69636f6e2e737667',
      type: skillCategories.TOOL,
    },
    {
      name: 'HTML5',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'JavaScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'MySQL',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Node.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'OpenCV',
      icon: 'https://camo.githubusercontent.com/de6ed745c22f7f8b8f8ef981a7ea194e4cb5d106e84a272fe283cae357c9abc5/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6f70656e63762f6f70656e63762d69636f6e2e737667',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Pandas',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Postman',
      icon: 'https://camo.githubusercontent.com/5c2595c2fcc9ef7ffa97d14f868547d945d5cee65045377c7c34611b5a67c139/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667',
      type: skillCategories.TOOL,
    },
    {
      name: 'Python',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Pytorch',
      icon: 'https://camo.githubusercontent.com/f9cfc512aa5c89da6c6069ea83d0989a2d7bdd814027d58af34ff8a0a6fa3bb6/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f7079746f7263682f7079746f7263682d69636f6e2e737667',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'React',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Blazor',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blazor.png/600px-Blazor.png',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Saas',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Scikit-Learn',
      icon: 'https://camo.githubusercontent.com/dd749c222d8c2520e9595af51d39578b46e22d5190fe5b2f31c01bc32446321e/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f302f30352f5363696b69745f6c6561726e5f6c6f676f5f736d616c6c2e737667',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'SQLite',
      icon: 'https://camo.githubusercontent.com/6ba82d645da10e17a701db0997df23158e7b860b95bdc1444572b4ef92ccba85/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f73716c6974652f73716c6974652d69636f6e2e737667',
      type: skillCategories.TOOL,
    },
    {
      name: 'Tensorflow',
      icon: 'https://camo.githubusercontent.com/6bda50ab133175c1dca7aebfc89410603b2259dd9399fa0e62259263c009ae39/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f74656e736f72666c6f772f74656e736f72666c6f772d69636f6e2e737667',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'TypeScript',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
      type: skillCategories.LANGUAGE,
    },
    {
      name: 'Vue.js',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg',
      type: skillCategories.FRAMEWORK,
    },
    {
      name: 'Docker',
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',
      type: skillCategories.TOOL,
    },
    {
      name: 'Jenkins',
      icon: 'https://camo.githubusercontent.com/1c1c3e37681eb5083d723bcd2392debb79e63ae049016c524c03c513f55ecf1e/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f6a656e6b696e732f6a656e6b696e732d69636f6e2e737667',
      type: skillCategories.TOOL,
    },
    {
      name: 'Godot',
      icon: 'https://camo.githubusercontent.com/d02789530545b23059534667c5e176d475f65fdae7e27e92d1ce9e8d11349957/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f362f36612f476f646f745f69636f6e2e7376672f3230343870782d476f646f745f69636f6e2e7376672e706e67',
      type: skillCategories.TOOL,
    },
    {
      name: 'Angular',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/512px-Angular_full_color_logo.svg.png',
      type: skillCategories.TOOL,
    },
    {
      name: 'Spring',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/512px-Spring_Boot.svg.png',
      type: skillCategories.FRAMEWORK,
    }
  ]

  /**
   * Retrieves all skills.
   * 
   * @returns An array of all skills.
   * 
   * @example
   * ```typescript
   * const allSkills = skillsService.getAllSkills();
   * ```
   */
  getAllSkills(): Skill[] {
    return this.allSkills;
  }

  /**
   * Retrieves a skill by its name.
   * 
   * @param name - The name of the skill to retrieve.
   * @returns The skill object if found, otherwise `undefined`.
   * 
   * @example
   * ```typescript
   * const kotlinSkill = skillsService.getSkillByName('Kotlin');
   * ```
   */
  getSkillByName(name: string): Skill | undefined {
    return this.allSkills.find(skill => skill.name === name);
  }

  /**
   * Retrieves all skills except those specified in the excludedSkills array.
   *
   * @param excludedSkills - An array of skill names to be excluded from the result.
   * @returns An array of Skill objects that do not include the excluded skill names.
   */
  getAllSkillsExcept(excludedSkills: string[]): Skill[] {
    return this.allSkills.filter(skill => !excludedSkills.includes(skill.name));
  }
}
