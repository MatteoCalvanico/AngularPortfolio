import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  ngOnInit() {
    this.addHoverAnimation();
  }

  /**
   * Adds hover animation to all images in the contact links.
   */
  addHoverAnimation() {
    const images = document.querySelectorAll('.contact-links img');
    images.forEach((img) => {
      img.addEventListener('mouseenter', () => {
        anime({
          targets: img,
          scale: 1.2,
          duration: 300,
          easing: 'easeInOutQuad'
        });
      });

      img.addEventListener('mouseleave', () => {
        anime({
          targets: img,
          scale: 1,
          duration: 300,
          easing: 'easeInOutQuad'
        });
      });
    });
  }
}