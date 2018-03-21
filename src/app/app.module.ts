import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,  } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { AuthenticationService } from "./services/authentication.service";
import { UserService } from "./services/user.service";
import { EmployeeService } from "./services/employee.service";
import { AuthGuard } from "./guards/auth.guard";

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { MainComponentsModule } from "./main-components/main-components.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    SharedComponentsModule,
    MainComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthenticationService, UserService, AuthGuard, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
