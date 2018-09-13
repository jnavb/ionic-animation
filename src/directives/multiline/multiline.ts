import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[multiline]' 
})
export class MultilineDirective {
  @Input('multiline') objectToDiv: any;

  constructor(private el: ElementRef) {
   
  }

  ngOnInit() {     
    Object.values(this.objectToDiv).map(value => {
      const newElement = document.createElement('div');
      newElement.innerHTML = value;
      console.log('elem', newElement.innerHTML)
      this.el.nativeElement.appendChild(newElement);
    });
  }


}
