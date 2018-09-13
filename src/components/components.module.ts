import { NgModule } from '@angular/core';
import { SlideComponent } from './slide/slide';
import { DropdownComponent } from './dropdown/dropdown';
@NgModule({
	declarations: [SlideComponent,
    DropdownComponent],
	imports: [],
	exports: [SlideComponent,
    DropdownComponent]
})
export class ComponentsModule {}
