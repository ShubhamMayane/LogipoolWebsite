import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  loginForm:FormGroup;


   constructor(private router: Router, private http: HttpClient,public fb: FormBuilder)
   {

    this. loginForm = this.fb.group({
      "email": ['', Validators.required],
      "password": ['', Validators.required]
  
     });
   }



  


 

 OnSubmit()
 {  
  console.log("inside onSubmit");
  console.log(this.loginForm.value);

  // let bodydata ={
  //   emailId:this.loginForm.value.email,
  //   password:this.loginForm.value.password
  // };
  if(this.loginForm.value.email=="admin" && this.loginForm.value.password=="admin")
  {
    this.router.navigateByUrl('/admindashboard');
  }
  else
  {
      alert("Incorrect Email or Password");
      console.log("Errror login");
  }


 }
}
