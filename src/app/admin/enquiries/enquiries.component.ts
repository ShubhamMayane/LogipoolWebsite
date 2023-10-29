import { Component } from '@angular/core';
import { DatabaseOperationsService } from 'src/app/database-operations.service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent {


  //to hold enuiries details
  enquiriesFromClient:any=[];

  //messge to to render in message box modal
  Msg:any;


  constructor(public sobj:DatabaseOperationsService)
  {
    this.enquiriesFromClient=this.sobj.getEnquiries();

  }

  onViewMessage(msg:any)
  {   
    this.Msg=msg;
    
  }


}
