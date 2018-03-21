import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { User } from "../models/user";

@Injectable()
export class UserService {

  baseUrl:string = "http://staging.tangent.tngnt.co";

  constructor(private http: HttpClient) { }

  getUser(){
    var token = JSON.parse(localStorage.getItem("activeToken"));
    var headers = new HttpHeaders()
    .set('Authorization', 'Token '+token.token);

    return this.http.get<User>(this.baseUrl+"/api/user",{headers:headers})
      .map(user =>{
        if(user){
          localStorage.setItem("activeUser", JSON.stringify(user[0]));
        }
        return user;        
      })
  }

}
