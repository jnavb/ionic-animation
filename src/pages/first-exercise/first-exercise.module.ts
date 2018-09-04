import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstExercisePage } from './first-exercise';

@NgModule({
  declarations: [
    FirstExercisePage,
  ],
  imports: [
    IonicPageModule.forChild(FirstExercisePage),
  ],
})
export class FirstExercisePageModule {}
