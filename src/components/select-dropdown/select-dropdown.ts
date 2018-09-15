import {
  Component,
  ElementRef
} from '@angular/core';
import {
  NavController
} from 'ionic-angular';

@Component({
  selector: 'select-dropdown',
  templateUrl: 'select-dropdown.html'
})
export class SelectDropdownComponent {
  options: any[] = [{
      key: 1,
      value1: "Javier Hidalgo",
      value2: "05 243 143 428 4",
      value3: "Asistencia Sanitaria"
    },
    {
      key: 2,
      value1: "Manolito",
      value2: "05 050 534 824",
      value3: "Asistencia Sanitaria"
    },
    {
      key: 3,
      value1: "Patricia Hidalgo",
      value2: "34 050 143 428 4",
      value3: "Asistencia Sanitaria"
    },
  ];
  selectedOption: any = {
    key: 4,
    value1: "Jose Julian",
    value2: "05 050 143 4288",
    value3: "Dental"
  };
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

  onClickSelected() {
    this.isMenuOpen = !this.isMenuOpen;
    this.isTap = !this.isTap;
  }

  onClickNewSelect(index: number) {
    const userClicked = document.getElementsByClassName('nav-submenu-item')[index];
    userClicked.classList.add('tap-open');
    setTimeout(() => {
      this.isMenuOpen = false;
      this.options.splice(index + 1, 0, this.selectedOption);
      this.selectedOption = this.options.splice(index, 1)[0];
    }, 200);
  }

}
