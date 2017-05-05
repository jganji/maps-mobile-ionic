import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentsPage} from "../pages/students/students";
import { CreatePage } from '../pages/create/create';
import { DetailPage} from "../pages/detail/detail";
import { MapsPage} from "../pages/maps/maps";
import { StudentService} from "./services/student.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StudentsPage,
    CreatePage,
    DetailPage,
    MapsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StudentsPage,
    CreatePage,
    DetailPage,
    MapsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StudentService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
