import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { ROUTES } from '../../shared-components/sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserService } from "../../services/user.service";
import { User } from "../../models/user";
import { Employee } from "../../models/employee";
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  location: Location;
  listTitles: any[];
  employeesList: Array<Employee> = new Array();

  constructor(location: Location, private userService: UserService, private employeeService: EmployeeService) {
    this.location = location;

  }

  startAnimationForLineChart(chart) {
    let seq: any, delays: any, durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq = 0;
  };
  startAnimationForBarChart(chart) {
    let seq2: any, delays2: any, durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', function (data) {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease'
          }
        });
      }
    });

    seq2 = 0;
  };
  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.employeesList = employees;
      var employeesPositionsBar: any = {};
      var employeesAgesBar: any = {};
      var employeeGenders : any = {};


      employeesPositionsBar.labels = [];
      employeesPositionsBar.series = [];

      employeesAgesBar.labels = ['20 - 25', '26 - 30', '31 - 35', '36 - 40', '41 - 45', '46 - 50', '51 - 55'];
      employeesAgesBar.series = [];

      employeeGenders.labels = ['Male','Female'];
      employeeGenders.series = [];

      var barChartOptions = {
        axisX: {
          showGrid: true
        },
        low: 0,
        high: 10,
        chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
      };

      var pieOptions = {
        donut:false,
        showLabel:true
      }


      var responsiveOptions: any[] = [
        ['screen and (max-width: 640px)', {
          seriesBarDistance: 1,
          axisX: {
            labelInterpolationFnc: function (value) {
              return value[0];
            }
          }
        }]
      ];

      var positionSeries = [];
      this.employeesList.forEach(employee => {
        if (employeesPositionsBar.labels.indexOf(employee.position.name + "s") != -1) {
          positionSeries[employeesPositionsBar.labels.indexOf(employee.position.name + "s")] += 1;
        } else {
          employeesPositionsBar.labels[employeesPositionsBar.labels.length] = employee.position.name + "s";
          positionSeries[employeesPositionsBar.labels.length - 1] = 1;
        }
      })

      employeesPositionsBar.series.push(positionSeries);

      var agesSeries = [0, 0, 0, 0, 0, 0, 0];
      this.employeesList.forEach(employee => {
        if (employee.age <= 25 && employee.age >= 20) {
          agesSeries[0] += 1;
        } else if( employee.age >= 26 && employee.age <= 30 ){
          agesSeries[1] += 1;
        } else if( employee.age >= 31 && employee.age <= 35){
          agesSeries[2] += 1;
        } else if(employee.age >= 36 && employee.age <= 40){
          agesSeries[3] += 1;
        } else if(employee.age >= 41 && employee.age <= 45){
          agesSeries[4] += 1;
        } else if(employee.age >= 46 && employee.age <= 50){
          agesSeries[5] += 1;
        } else if(employee.age >= 51 && employee.age <= 55){
          agesSeries[6] += 1;
        }
      })
      employeesAgesBar.series.push(agesSeries);

      employeeGenders.series = [0, 0];
      this.employeesList.forEach(employee =>{
        debugger
        if(employee.gender === "M"){
          employeeGenders.series[0] +=1;
        }else{
          employeeGenders.series[1] +=1;
        }
      })

      
      var employeesSubscriptionChart = new Chartist.Bar("#employeePositionSubscriptionChart", employeesPositionsBar, barChartOptions, responsiveOptions);
      var employeesAgeSubscriptionChart = new Chartist.Bar("#employeeAgesSubscriptionChart", employeesAgesBar, barChartOptions, responsiveOptions);
      var employeeGenderSubscriptionChart = new Chartist.Pie("#employeeGenderSubscriptionChart", employeeGenders, pieOptions);
    })

  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(2);
    }
    titlee = titlee.split('/').pop();

    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Dashboard';
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(employees => {
      this.employeesList = employees;
    })
  }

  getFrontEnders(){
    return this.employeesList.filter(employee => employee.position.name === "Front-end Developer").length;
  }

  getBackEnders(){
    return this.employeesList.filter(employee => employee.position.name === "Back-end Developer").length;
  }

  getBirthDaysThisMonth(){
    return this.employeesList.filter(employee => employee.days_to_birthday <= 31).length;
  }

}
