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
  private readonly SLIDE_BETWEEN_RATIO: number = -0.375; 
  

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

    this.slides.ionSlideDrag.subscribe( slidesData => this.onSlideProgress(slidesData));
    
    this.slides.ionSlideTouchStart.subscribe(() => this.toggleTransitions(false));
    this.slides.ionSlideTouchEnd.subscribe(() => this.toggleTransitions(true));
  }

  onSlideProgress(slidesData) {
    console.log('Progresss', slidesData.progress)
    this.onProgress(slidesData.progress);
  }

  onSlideDrag(event) {
    console.log('onDrag', event)
  }

  onProgress(centerX: number): void {
    let maxScale = 0.8;
    let slideCount = this.slides._slides.length;
    let slideDelta = 1 / (slideCount - 1)
    let slope = Math.abs((maxScale - 1) / slideDelta);
    for (let slideIndex = 0; slideIndex < slideCount; slideIndex++) {
      let slideX = slideIndex * slideDelta;
      let slideScale = 0.5;
      if (slideX > centerX - slideDelta) {
        if (slideX <= centerX) {
          slideScale += (slideX - (centerX - slideDelta)) * slope;
        } else if (slideX < centerX + slideDelta) {
          slideScale += ((centerX + slideDelta) - slideX) * slope;
        }
      }
      //console.log('slideScale', slideScale)
      this.slides._slides[slideIndex].style.transform = `scale(${slideScale})`;
      this.slides._slides[slideIndex].innerHTML = '' + slideScale.toString().substring(0,3);
    }
  }
  toggleTransitions(enable: boolean): void {
    /* (enable) ? console.log('TOGGLE TRUE') : console.log('TOGGLE FALSEE')
    let count = this.slides._slides.length;
    for (let index = 0; index < count; index++) {
      this.slides._slides[index].style.transition = `transform ${this.slides.speed}ms !important`;
    } */
  }
}
