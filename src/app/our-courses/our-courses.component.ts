import { Component } from '@angular/core';
import { DatabaseOperationsService } from '../database-operations.service';

@Component({
  selector: 'app-our-courses',
  templateUrl: './our-courses.component.html',
  styleUrls: ['./our-courses.component.css']
})
export class OurCoursesComponent {

  coursesDetails:any=[];
  courseContent:any=[];
  constructor(public sobj:DatabaseOperationsService)
  {
    this.coursesDetails=this.sobj.getCoursesDetailsInDb();

  }
  
  
  ViewCourseContents(data:any)
  {
    this.courseContent=data;
  }
}
