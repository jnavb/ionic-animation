import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Platform } from 'ionic-angular';

@Component({
  selector: 'slider',
  templateUrl: 'slider.html'
})
export class SliderComponent {
  @ViewChildren(Slides) slides: Slides;
  
  private widthDevice: number;
  private heigthDevice: number;
  private readonly SLIDE_BETWEEN_RATIO: number = -0.45; 
  private lastCenter: number;

  constructor(private platform: Platform) { }

  ngOnInit() {
    
   }


  ngAfterViewInit() {
    this.slides = this.slides._results[1];
    console.log('Slide component', this.slides)
    console.log('WIIIIIIIDTH', this.widthDevice)

    this.platform.ready().then((readySource) => {
      this.widthDevice = this.platform.width();
      this.heigthDevice = this.platform.height();

      this.slides.spaceBetween = this.widthDevice * this.SLIDE_BETWEEN_RATIO;
    });
    console.log('asdfasdfasdf',this.slides.length)
    //this.onProgress(0);

    this.slides.ionSlideDrag.subscribe( slidesData => this.onSlideProgress(slidesData));
    this.slides.ionSlideTouchStart.subscribe((slidesData) => this.toggleTransitions(false, slidesData));
    this.slides.ionSlideTouchEnd.subscribe((slidesData) => this.toggleTransitions(true, slidesData));
  }

  onSlideProgress(slidesData) {
    console.log('Progresss', slidesData.progress)
    this.onProgress(slidesData.progress);
  }

  onSlideDrag(event) {
    console.log('onDrag', event)
  }

  onProgress(centerX: number): void {
    this.lastCenter = centerX;

    let maxScale = .6;
    let slideCount = this.slides._slides.length;
    let slideDelta = 1 / (slideCount - 1)
    let slope = Math.abs((maxScale - 1) / slideDelta);
    console.log(maxScale, slideCount, slideDelta, slope);
    for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
      let slideX = slideIndex * slideDelta;
      let slideScale = 0.2;
      if (slideX > centerX - slideDelta) {
        if (slideX <= centerX) {
          slideScale += (slideX - (centerX - slideDelta)) * slope;
        } else if (slideX < centerX + slideDelta) {
          slideScale += ((centerX + slideDelta) - slideX) * slope;
        }
      }
      //console.log('slideScale', slideScale)
      this.slides._slides[slideIndex].style.transform = `scale(${slideScale})`;
      this.slides._slides[slideIndex].innerHTML = '' + slideScale.toString().substring(0,5);
    }
  }
  toggleTransitions(enable: boolean, slidesData): void {
    (enable) ? console.log('TOGGLE TRUE', slidesData) : console.log('TOGGLE FALSEE', slidesData)
    let count = this.slides._slides.length;
    for (let index = 0; index < count; index++) {
      //this.slides._slides[index].style.transition = `transform ${this.slides.speed}ms !important`;
      //this.slides._slides[index].style.transform = `scale(.8) !important`;
    } 
  }

  calculateSlideWithGivenProgress() {

  }
}
