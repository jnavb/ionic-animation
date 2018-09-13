import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myButton', {read: ElementRef}) myButton;

  constructor(
    public navCtrl: NavController,
    public renderer: Renderer
  ) { }

  changeStyle() {
    console.log(this.myButton)
    this.renderer.setElementStyle(this.myButton.nativeElement, 'top', '0px');
  }

  onClick() {
    this.navCtrl.push("SliderPage")
  }

}
