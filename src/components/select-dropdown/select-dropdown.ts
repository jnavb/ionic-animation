import {
  Component,
  ElementRef,
  Input
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'select-dropdown',
  templateUrl: 'select-dropdown.html'
})
export class SelectDropdownComponent {
  @Input() options: any;

  selectedElement: any;
  isMenuOpen: boolean = false;
  isTap: boolean = false;
  text: string;


  constructor(
    public navCtrl: NavController,
    public element: ElementRef
  ) {}

  ngOnInit() {
    this.selectedElement = this.element.nativeElement.getElementsByClassName("nav-selected")[0];
  }

  onClickSelected(index) {
    if (index !== 0) {
      this.changeSelected(index);
    }
    /* const clickedOption = document.getElementsByClassName('nav-selected')[index];
    const newOne = clickedOption.cloneNode(true);
    clickedOption.parentNode.replaceChild(newOne, clickedOption);
    const a = document.getElementsByClassName('nav-selected')[index];
    a.classList.add('tap-open'); */
  }

  private changeSelected(index: number) {
    //userClicked.classList.add('tap-open');
    setTimeout(() => {
      this.options.splice(index + 1, 0, this.options[0]);
      this.options[0] = this.options.splice(index, 1)[0];
    }, 200);
    setTimeout(() => {
      //this.hideSubmenu();
    }, 1000);
  }

  private hideSubmenu() {
    const menu = document.getElementsByClassName('nav-selected');
    Array.from(menu as HTMLCollectionOf < HTMLElement > )
      .map((option, index) => {
        console.log(option);
        if (index === 0) return;

        option.style.display = 'none';
      })
  }

}
