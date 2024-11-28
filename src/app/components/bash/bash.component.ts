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
      strings: ["Software Developer", "Game Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    const typed = new Typed('.typed-element', options);
  }
  
}