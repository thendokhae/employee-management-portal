import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee";
import { EmployeeFilter } from "../../models/employeeFilter";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employeesList: Array<Employee> = new Array();
  itemResource: any;
  items = [];
  itemCount = 0;
  employeeFilter: EmployeeFilter = new EmployeeFilter();

  dateRangeValues:any[] = [{id:'',text:'Any Date'},{id:1,text:'Today'},{id:2,text:'Past 7 Days'},{id:3,text:'This Month'}, {id:4,text:'This Year'}, {id:5,text:'Yesterday'}];
  genderValues:any[] = [{id:'',text:''}, {id:'M',text:'Male'}, {id:'F',text:'Female'}];
  raceValues:any[] = [{id:'B',text:'Black African'},{id:'C',text:'Coloured'}, {id:'I',text:'Indian or Asian'}, {id:'W',text:'White'}, {id:'N',text:'None Dominant'}];
  positionValues:any[] =[{id:1,text:'Front-end Developer Senior'},{id:2,text:'Back-end Developer Junior'},{id:3,text:'Project Manager Senior'},{id:4,text:'Project Manager Junior'}];
 
  constructor(private employeeService: EmployeeService) { 

  }

  ngOnInit() {
    this.search();
  }

  getAllEmployees() {
    this.employeeService.getEmployeesByFilter(this.employeeFilter).subscribe(employees => {
      this.employeesList = employees;
      this.items = [];
      this.employeesList.forEach(employee =>{
        this.items.push({'first_name':employee.user.first_name,'last_name':employee.user.last_name, 'active':employee.user.is_active
      ,'job_title':employee.position.name,'phone_number':employee.phone_number, 'gender':employee.gender,
        'birth_date':employee.birth_date, 'age':employee.age})
      })
      this.itemResource = new DataTableResource(this.items);
      this.itemResource.count().then(count => this.itemCount = count);
    });
  }

  reloadItems(params) {
    if(this.employeesList.length > 0){
      this.itemResource.query(params).then(items => this.items = items);
    }
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item);
  }

  rowDoubleClick(rowEvent) {
    console.log('Double clicked: ' + rowEvent.row.item);
  }

  rowTooltip(item) { return item.job_title; }

  search(){
    this.getAllEmployees();
  }

  clear(){
    this.employeeFilter =  new EmployeeFilter();
    this.search();
  }

}
