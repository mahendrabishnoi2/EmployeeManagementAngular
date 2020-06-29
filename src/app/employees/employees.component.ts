import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeFilterPipe } from '../employee-filter.pipe';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:Employee[] = [];
  filterCondition:string = "";
  constructor(public empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
    // this.totalEmployees = this.getTotalEmployees();
  }

  getEmployees(): void {
    this.empService.getEmployees().subscribe(employees => this.employees = employees);
  }

}
