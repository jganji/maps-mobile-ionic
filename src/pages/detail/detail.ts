import { Component } from '@angular/core';
import {NavController, Tabs} from 'ionic-angular';
import { Student } from '../../app/services/student';
import { NavParams } from 'ionic-angular';
import { StudentService } from '../../app/services/student.service';
@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  tab:Tabs;
  public studentId : any;
  students:any;
  student = new Student();
  constructor(public navCtrl: NavController,private navParams: NavParams,private studentService: StudentService) {

    this.studentId = navParams.get("studentId")
    console.log("Student Id------->"+this.studentId)
  }
  ngOnInit(){
    this.tab = this.navCtrl.parent;
    console.log("Init ran once.....");
    this.students = this.studentService.getStudents();
    for (var i = 0; i < this.students.length; i++) {
      if(this.studentId == this.students[i].id ){
          this.student = this.students[i];
          break;
      }
    }
    console.log(this.student);
  }
}
