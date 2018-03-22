import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Employee } from "../models/employee";
import { User } from "../models/user";
import { EmployeeFilter } from "../models/employeeFilter";

@Injectable()
export class EmployeeService {

  baseUrl: string = "http://staging.tangent.tngnt.co";


  constructor(private http: HttpClient) {
  }

  getEmployee(user: User) {
    var token = JSON.parse(localStorage.getItem("activeToken"));
    var headers = new HttpHeaders()
      .set('Authorization', 'Token ' + token.token);
    return this.http.get<Employee>(this.baseUrl + "/api/employee/?user=" + user.id, { headers: headers })
      .map(employee => {
        return employee;
      })
  }

  getAllEmployees() {
    var token = JSON.parse(localStorage.getItem("activeToken"));
    var headers = new HttpHeaders()
      .set('Authorization', 'Token ' + token.token);
    return this.http.get<Employee[]>(this.baseUrl + "/api/employee/", { headers: headers })
      .map(employees => {
        return employees;
      })
  }

  getEmployeesByFilter(employeeFilter: EmployeeFilter) {
    var token = JSON.parse(localStorage.getItem("activeToken"));
    var headers = new HttpHeaders()
      .set('Authorization', 'Token ' + token.token);
      var fullUrl =this.baseUrl + "/api/employee/?birth_date_range="+(employeeFilter.birth_date_range != null?employeeFilter.birth_date_range:'')+"&gender="+employeeFilter.gender+"&email__contains="+employeeFilter.email_contains+"&race="+(employeeFilter.race != null?employeeFilter.race:'')+
      "&start_date_range="+(employeeFilter.start_date_range !=null ? employeeFilter.start_date_range:'')+"&position="+(employeeFilter.position != null ?employeeFilter.position:'');
    return this.http.get<Employee[]>(fullUrl, { headers: headers })
      .map(employees => {
        return employees;
      })
  }

}
