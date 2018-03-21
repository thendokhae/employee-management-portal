import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Employee } from "../models/employee";
import { User } from "../models/user";

@Injectable()
export class EmployeeService {

  baseUrl:string = "http://staging.tangent.tngnt.co";
  
  
  constructor(private http: HttpClient) {
   }

  getEmployee(user:User){
    var token = JSON.parse(localStorage.getItem("activeToken"));
    var headers = new HttpHeaders()
    .set('Authorization', 'Token '+token.token);
    return this.http.get<Employee>(this.baseUrl+"/api/employee/?user="+user.id,{headers:headers})
      .map(employee =>{
        return employee;
      })
  }

  getAllEmployees(){
    var token = JSON.parse(localStorage.getItem("activeToken"));
    var headers = new HttpHeaders()
    .set('Authorization', 'Token '+token.token);
    return this.http.get<Employee[]>(this.baseUrl+"/api/employee/", {headers:headers})
      .map(employees =>{
        return employees;
      })
  }

}
