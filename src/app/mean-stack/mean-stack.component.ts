import { Component } from '@angular/core';
import { DatabaseOperationsService } from '../database-operations.service';

@Component({
  selector: 'app-mean-stack',
  templateUrl: './mean-stack.component.html',
  styleUrls: ['./mean-stack.component.css']
})
export class MeanStackComponent 
 {

  public courseDetails:any=[]; 
  

 
  constructor(public sObj:DatabaseOperationsService)
  {
    this.sObj.getCoursesDetails().subscribe(data=> this.courseDetails=data);
    console.log("Inside Constructor");
   
  
    
  }


  
 
 
 
}
