import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import {StudentsPage} from "../students/students";
import {DetailPage} from "../detail/detail";
import {CreatePage} from "../create/create";
import {MapsPage} from "../maps/maps";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = StudentsPage;
  tab3Root = DetailPage;
  tab4Root = CreatePage;
  tab5Root  = MapsPage;

  constructor() {

  }
}
