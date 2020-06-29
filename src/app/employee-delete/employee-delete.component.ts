import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(
    private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.deleteEmployee();
    this.router.navigate(['/employees']);
  }

  deleteEmployee() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.empService.deleteEmployee(id).subscribe();
  }

}
