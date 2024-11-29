import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

/**
 * Component representing a bash-like interface.
 * 
 * @selector app-bash
 * @templateUrl ./bash.component.html
 * @styleUrls ./bash.component.scss
 */
@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.scss']
})
export class BashComponent implements OnInit {

  /**
   * Initializes the component.
   */
  ngOnInit() {
    const options = {
      strings: ["", "Welcome, I'm a Software Developer", "Welcome, I'm a Game Developer"],
      typeSpeed: 50,
      backSpeed: 0,
      smartBackspace: true,
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }
  
}