import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {

baseUrl:string = "http://staging.tangent.tngnt.co";
constructor(private http: HttpClient) { }

login(username: string, password: string) {
  const headers = new HttpHeaders()
  .set('content-type', 'application/json');

const body = {
  username: username,
  password: password
}

return this.http
        .post<any>(this.baseUrl+'/api-token-auth/', body, { headers: headers })
        .map(user => {
          // login successful if there's a token in the response
          if (user && user.token) {
            // store user token in local storage to keep user logged in between page refreshes
            localStorage.setItem('activeToken', JSON.stringify(user));
        }

        return user;           
        });
}

logout() {
    // remove token from local storage to log user out
    localStorage.removeItem('activeToken');
}
}
