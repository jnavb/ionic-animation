import { Component } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: 'dropdown.html'
})
export class DropdownComponent {

  text: string;
  options: any =  [
    {name2: "subtitle text", id: 10000000, name: "United States"},
    {name2: "subtitle text", id: 20000000, name: "Australia"},
    {name2: "subtitle text", id: 30000000, name: "Canada"},
    {name2: "subtitle text", id: 40000000, name: "Brazil"},
    {name2: "subtitle text", id: 50000000, name: "England"}
  ];
  selectedValue: any = this.options[0];

  directiveInput: any = {name2: "subtitle text", id: 10000000, name: "United States"};

  constructor() {
    console.log('Hello DropdownComponent Component');
    this.text = 'Hello World';
  }

}
