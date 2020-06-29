import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  locations: ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];
  employees: Employee[];
  id: number;
  newEmployee: Employee = {
    id: this.id,
    name: "",
    location: "",
    email: "",
    mobile: ""
  };


  constructor(
    private empService: EmployeeService,
    private router: Router
  ) { }

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.newEmployee); }

  ngOnInit(): void {
    this.getEmployees();
    this.id = this.genId();
  }

  getEmployees(): void {
    this.empService.getEmployees().subscribe(employees => this.employees = employees);
  }

  genId(): number {
    return this.employees?.length > 0 ? Math.max(...this.employees.map(employee => employee.id)) + 1 : 1;
  }

  addEmployee() {
    this.empService.addEmployee(this.newEmployee as Employee).subscribe();
    this.router.navigate(['/employees']);
  }

}
