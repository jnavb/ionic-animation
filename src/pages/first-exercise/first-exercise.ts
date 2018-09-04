import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-first-exercise',
  templateUrl: 'first-exercise.html',
})
export class FirstExercisePage {
  @ViewChild('myButton', {read: ElementRef}) myButton;

  constructor(
    public navCtrl: NavController,
    public renderer: Renderer
  ) { }

  changeStyle() {
    console.log(this.myButton)
    this.renderer.setElementStyle(this.myButton.nativeElement, 'top', '0px');
  }

}
