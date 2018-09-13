import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SlideComponent } from '../components/slide/slide';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DropdownComponent } from '../components/dropdown/dropdown';
import { MultilineDirective } from '../directives/multiline/multiline'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SlideComponent,
    DropdownComponent,
    MultilineDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
