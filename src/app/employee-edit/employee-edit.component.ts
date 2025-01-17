import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  title = "Edit Employee";
  employee:Employee;
  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  locations = ['Bangalore', 'Chennai', 'Pune', 'Hyderabad'];

  onSubmit() {
    this.empService.updateEmployee(this.employee).subscribe();
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.empService.getEmployee(id).subscribe(employee => this.employee = employee);
  }

}
