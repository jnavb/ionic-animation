import { Component } from '@angular/core';

@Component({
  selector: 'slide',
  templateUrl: 'slide.html'
})
export class SlideComponent {

  text: string;

  constructor() {
    console.log('Hello SlideComponent Component');
    this.text = 'Hello World';
  }

}
