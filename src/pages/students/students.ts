import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StudentService } from '../../app/services/student.service';
import {DetailPage} from '../detail/detail'
@Component({
  selector: 'students',
  templateUrl: 'students.html'
})
export class StudentsPage {
  students:any;
  studentId : number;
  detailsPage = DetailPage
  constructor(public navCtrl: NavController,private studentService: StudentService) {
  }
  navigate(id){
    this.studentId = id
    this.navCtrl.push(DetailPage,{studentId:this.studentId})
  }
  ngOnInit(){
    console.log("Init ran once.....");

    this.students = this.studentService.getStudents();
  }
}
