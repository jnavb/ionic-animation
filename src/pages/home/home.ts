import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('myButton', {read: ElementRef}) myButton;
  inputSelect: any[] = [{
    key: 1,
    value1: "Name subname1",
    value2: "05 243 143 428 4",
    value3: "Index1"
  },
  {
    key: 2,
    value1: "Name subname2",
    value2: "05 050 534 824",
    value3: "Index2"
  },
  {
    key: 3,
    value1: "Name subname3",
    value2: "34 050 143 428 4",
    value3: "Index3"
  },
  {
    key: 4,
    value1: "Name subname4",
    value2: "05 050 143 4288",
    value3: "Index4"
}];

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
