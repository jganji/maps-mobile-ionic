import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Student } from '../../app/services/student';

@Component({
  selector: 'create',
  templateUrl: 'create.html'
})
export class CreatePage {
  model = new Student();
  submitted = false;
  onSubmit() { console.log("Form Submitted");
    console.log(this.model.name +" - "+ this.model.studentclass +" - "+ this.model.address );
    this.submitted = true; }
  constructor(public navCtrl: NavController) {

  }
  ngOnInit(){
    console.log("Init ran once.....");
  }
}
