import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

import { Course } from './Course';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DatabaseOperationsService {


  //Dummy Database

  courseDetailsInDatabase:any=[
    {_id:"1",courseName:"MEAN STACK",courseDuration:"3 months",courseFees:"15000",courseContent:["HTML","CSS","JAVASCRIPT","BOOTSTRAP","MATERIAL DESIGN","ANGULAR FRAMEWORK","NODE JS","EXPRESS JS","MONGODB"]},
    {_id:"2",courseName:"MERN STACK",courseDuration:"4 months",courseFees:"25000",courseContent:["HTML","CSS","JAVASCRIPT","BOOTSTRAP","MATERIAL DESIGN","REACT LIBRARY","NODE JS","EXPRESS JS","MONGODB"]},
    {_id:"3",courseName:"CYBER SECURITY",courseDuration:"4 months",courseFees:"35000",courseContent:["Ethical Hacking","Cryptography Concepts","IDS Firewalls and Honeypots","Network Security","Vulnerability Assessment","Penetration Testing","Reconnaissance","Web App Threats","Generating Payload","Exploiting and Gaining Access","Anonymity Concept"]},
    {_id:"4",courseName:"AWS",courseDuration:"5 months",courseFees:"55000",courseContent:["Efficient design and deployment of the AWS system","Cost-evaluation and cost-control mechanisms","Elastic Load Balancing on multiple EC2 instances","Data ingress and egress on AWS","Identifying relevant and suitable uses of AWS architecture","Penetration Testing","Lift and shift mechanism of AWS on-premises applications","Finding the right solutions based on computational, database, and security needs"]},
  ];
  


  //dummy database for admin

  enquiries:any=[
    {Name:"shubham",Email:"Shubham@gmail.com",Message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popula"}
  ];
  


  public databasePath="http://localhost:5100/getAllBatchDetails";
  constructor(public hObj:HttpClient) 
  {

  }

  public getCoursesDetailsInDb()
  {
    console.log("inside getCoursesDetailsInDb() ");
    return this.courseDetailsInDatabase;
  }



  //code for enquiries

  public setEnquiries(dataFromClient:any)
  { 
    this.enquiries.push(dataFromClient);
    console.log(this.enquiries);

  }


  public getEnquiries()
  {
    return this.enquiries;
  }








   public getCoursesDetails():Observable<Course[]>
   {
      return this.hObj.get<Course[]>(this.databasePath);

   }

}
