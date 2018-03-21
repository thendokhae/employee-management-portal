import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService) { }

  ngOnInit() {
      // reset login status
      this.authenticationService.logout();

      // default to 'dashboard'
      this.returnUrl =  'dashboard';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
    .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            this.loading = false;
        });
}  
}
