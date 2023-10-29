import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminSideBarComponent } from './admin-side-bar/admin-side-bar.component';
import { CourseMasterComponent } from './course-master/course-master.component';
import { CourseContentsMasterComponent } from './course-contents-master/course-contents-master.component';
import { EnquiriesComponent } from './enquiries/enquiries.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DatabaseOperationsService } from '../database-operations.service';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminSideBarComponent,
    CourseMasterComponent,
    CourseContentsMasterComponent,
    EnquiriesComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DatabaseOperationsService],
  exports: [
    AdminDashboardComponent
  ]
})
export class AdminModule { }
