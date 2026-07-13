import { Component, OnDestroy, OnInit } from '@angular/core';
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
  styleUrls: ['./bash.component.scss'],
})
export class BashComponent implements OnInit, OnDestroy {
  private typed?: Typed;

  /**
   * Initializes the component.
   */
  ngOnInit() {
    const options = {
      strings: [
        '',
        "Welcome, I'm a Full-Stack Software Engineer",
        "Welcome, I'm a Game Developer",
      ],
      typeSpeed: 50,
      backSpeed: 0,
      smartBackspace: true,
      loop: true,
    };

    this.typed = new Typed('.typed-element', options);
  }

  ngOnDestroy(): void {
    this.typed?.destroy();
  }
}
