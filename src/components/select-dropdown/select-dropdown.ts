import { Component } from '@angular/core';

/**
 * Generated class for the SelectDropdownComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'select-dropdown',
  templateUrl: 'select-dropdown.html'
})
export class SelectDropdownComponent {

  text: string;

  constructor() {
    console.log('Hello SelectDropdownComponent Component');
    this.text = 'Hello World';
  }

}
