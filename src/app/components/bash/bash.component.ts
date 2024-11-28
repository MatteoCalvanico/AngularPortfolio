import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-bash',
  templateUrl: './bash.component.html',
  styleUrls: ['./bash.component.scss']
})
export class BashComponent implements OnInit {

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