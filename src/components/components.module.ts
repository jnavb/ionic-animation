import { NgModule } from '@angular/core';
import { SlideComponent } from './slide/slide';
import { DropdownComponent } from './dropdown/dropdown';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown';
import { SliderComponent } from './slider/slider';
@NgModule({
	declarations: [SlideComponent,
    DropdownComponent,
    SelectDropdownComponent,
    SliderComponent],
	imports: [],
	exports: [SlideComponent,
    DropdownComponent,
    SelectDropdownComponent,
    SliderComponent]
})
export class ComponentsModule {}
