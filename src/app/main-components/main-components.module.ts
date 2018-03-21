import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DataTableModule } from 'angular-4-data-table-bootstrap-4';

import { SharedComponentsModule } from "../shared-components/shared-components.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedComponentsModule,
    DataTableModule
  ],
  declarations: [
    DashboardComponent, 
    EmployeesListComponent, 
    EmployeeProfileComponent, 
    LoginComponent
  ], exports:[
    DashboardComponent, 
    EmployeesListComponent, 
    EmployeeProfileComponent,
    LoginComponent
  ]
})
export class MainComponentsModule { }
