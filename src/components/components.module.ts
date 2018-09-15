import { NgModule } from '@angular/core';
import { SlideComponent } from './slide/slide';
import { DropdownComponent } from './dropdown/dropdown';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown';
@NgModule({
	declarations: [SlideComponent,
    DropdownComponent,
    SelectDropdownComponent],
	imports: [],
	exports: [SlideComponent,
    DropdownComponent,
    SelectDropdownComponent]
})
export class ComponentsModule {}
