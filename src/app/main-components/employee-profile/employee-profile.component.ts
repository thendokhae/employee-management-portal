import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee";
import { User } from "../../models/user";

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {

  employee:Employee = new Employee();
  loggedInUser:User = new User();
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.loggedInUser = JSON.parse(localStorage.getItem("activeUser"));
    this.getEmployeeProfile();
  }

  getEmployeeProfile(){
    this.employeeService.getEmployee(this.loggedInUser).subscribe(employee =>{
      this.employee = employee[0];
    });
  }

  getGenderValue(value:string){
    var gender ="";
    switch (value) {
      case "M":
        gender= "Male";
        break;
      case "F":
        gender = "Female";
        break;
      default:
        break;
    }
    return gender;
  }

  getRaceValue(value:string){
    var race="";
    switch (value) {
      case "B":
        race = "Black African";
        break;
      case "C":
        race = "Coloured";
        break;
      case "I":
        race = "Indian or Asian"
        break;
      case "W":
        race = "White";
        break;
      case "N":
        race = "None Dominant";
        break;
      default:
        break;
    }
    return race;
  }

}
