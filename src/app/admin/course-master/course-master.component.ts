import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DatabaseOperationsService } from 'src/app/database-operations.service';

@Component({
  selector: 'app-course-master',
  templateUrl: './course-master.component.html',
  styleUrls: ['./course-master.component.css']
})
export class CourseMasterComponent {


  addCourseForm:FormGroup;
  updateCourseForm:FormGroup;
  coursesDetails:any=[];

  bodydata:any;
  show: boolean= false;
  selectedId:any="";
  selectedIdedit:any=""
   constructor( public sobj:DatabaseOperationsService)
   {
    //add course form
    this.addCourseForm=new FormGroup({

      'coursename':new FormControl(null),
      'courseduration':new FormControl(null)
    });

    //update copurse form
    this.updateCourseForm=new FormGroup({

      'updatedcoursename':new FormControl(null),
      'updatedcourseduration':new FormControl(null)
    });

   
   }

   ngOnInit(): void {

    this.coursesDetails=this.sobj.getCoursesDetailsInDb();
    console.log(this.coursesDetails);
    // this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
    //   console.log(data.allCourses);
    //    this.courses=data.allCourses;
    // });
   }
   
   getCourses()
   {  
    // this.http.get("http://localhost:3000/admin/getAllCourse").subscribe((data:any)=>{
    //   console.log(data.allCourses);
    //    this.courses=data.allCourses;
    // });

   }
   

   deleteCources( id: any)
   {
    console.log(id)

    this.selectedId=id;
    
   }
   conformDeleteCource()
   {

    console.log(this.selectedId);
    // this.http.delete(`http://localhost:3000/admin/deleteCourse/${this.selectedId}`).subscribe((data:any)=>{
    //   console.log("From Backend" + data.message);
      
    // });
    this.getCourses();
    this.selectedId="";
  
   }

   addCourse()
  { 

    console.log("inisde add course");
       
        var bodydata ={
          courseName:this.addCourseForm.value.coursename,
          courseDuration:this.addCourseForm.value.courseduration
        };

        // console.log(bodydata);
        // this.http.post("http://localhost:3000/admin/addCourse", bodydata).subscribe(  (resultData: any) => {
        //       console.log(resultData);
        //       console.log(resultData.message);
        //       console.log(resultData.status);
      
        //     });

          

            this.getCourses();

          // this.addCourseForm.reset();
      
  }


  //update related code

  onUpdateCourse(data:any)
  {
    console.log("inside onUpdateCourse")
    console.log(data);
    
    this.updateCourseForm.controls['updatedcoursename'].setValue(data.courseName);
    this.updateCourseForm.controls['updatedcourseduration'].setValue(data.courseDuration);
    
    this.selectedId=data._id;

  }

  updateCourse()
  {
    console.log("inside update course function");

   
    let bodydata :any={
      courseName:this.updateCourseForm.value.updatedcoursename,
      courseDuration:this.updateCourseForm.value.updatedcourseduration
    };

    console.log(bodydata);
    console.log(this.selectedId)

    // update api Call
  //   this.http.put<any>( `http://localhost:3000/admin/updateCourse/${this.selectedId}`,bodydata).subscribe((data:any)=>{
  //     console.log("From Backend" + data.message);
  // });

    
   
    this.selectedId="";
    this.updateCourseForm.reset();
    this.getCourses();
  }


}
