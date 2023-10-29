import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { PlacementComponent } from './placement/placement.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { MeanStackComponent } from './mean-stack/mean-stack.component';

import { ClientMainComponent } from './client-main/client-main.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CourseMasterComponent } from './admin/course-master/course-master.component';
import { CourseContentsMasterComponent } from './admin/course-contents-master/course-contents-master.component';
import { EnquiriesComponent } from './admin/enquiries/enquiries.component';
import { LoginComponent } from './admin/login/login.component';
import { OurCoursesComponent } from './our-courses/our-courses.component';

const routes: Routes = [

  {path:'',
  component:ClientMainComponent,
  children:[
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'ourcourse',component:OurCoursesComponent},
    {path:'placement',component:PlacementComponent},
    {path:'register',component:RegisterComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'contactus',component:ContactUsComponent},
   
  ]

  },
  //for admin Pages
  {path:"adminlogin",component:LoginComponent},
  {path:'admindashboard',component:AdminDashboardComponent,
  children:[
    {path:"",component:CourseMasterComponent},
    {path:"coursemaster",component:CourseMasterComponent},
    {path:"coursecontent",component:CourseContentsMasterComponent},
    {path:"enquiries",component:EnquiriesComponent},

  ]

},

  {path:'**',component:WildCardComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
