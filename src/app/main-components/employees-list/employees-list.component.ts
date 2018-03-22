import { Component, OnInit } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import { EmployeeService } from "../../services/employee.service";
import { Employee } from "../../models/employee";

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

  constructor(private employeeService: EmployeeService) { 

  }

  ngOnInit() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.employeesList = employees;
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
    console.log('Clicked: ' + rowEvent.row.item.name);
  }

  rowDoubleClick(rowEvent) {
    alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) { return item.jobTitle; }

}
