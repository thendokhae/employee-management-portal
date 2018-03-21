import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from "./main-components/dashboard/dashboard.component";
import { EmployeeProfileComponent } from "./main-components/employee-profile/employee-profile.component";
import { EmployeesListComponent } from "./main-components/employees-list/employees-list.component";
import { LoginComponent } from "./main-components/login/login.component";

const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'employee-profile',   component: EmployeeProfileComponent },
    { path: 'employees-list',     component: EmployeesListComponent },
    { path: 'login',     component: LoginComponent },
    { path: '',               redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }