import { Component } from '@angular/core';
import {EmailValidator, FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
import { DatabaseOperationsService } from '../database-operations.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {


  contactUsForm:FormGroup;
  

  // Use dependency injection for FormBuilder
  constructor(private fb : FormBuilder,public sobj:DatabaseOperationsService)
  {
    this.contactUsForm = new FormGroup(
      {
        'name':new FormControl(null),
        'email':new FormControl(null),
        'message':new FormControl(null),
      }
    )

    
  }

  sendEnquiry()
  {   
    console.log("inside sendEnquiry()");
    let dataToSend={
      "Name":this.contactUsForm.value.name,
      "Email":this.contactUsForm.value.email,
      "Message":this.contactUsForm.value.message
    }
    this.sobj.setEnquiries(dataToSend);

  }

}
