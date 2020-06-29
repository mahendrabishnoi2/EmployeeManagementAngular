import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';


const routes: Routes = [
  {path:'employees', component: EmployeesComponent},
  {path: 'addEmployee', component: AddEmployeeComponent},
  {path: 'details/:id', component: EmployeeDetailComponent},
  {path: 'editEmployee/:id', component: EmployeeEditComponent},
  {path: 'deleteEmployee/:id', component: EmployeeDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
