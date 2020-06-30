import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeFilterPipe } from './employee-filter.pipe';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
 
@NgModule({
  declarations: [ 
    AppComponent,
    EmployeesComponent,
    AddEmployeeComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeFilterPipe,
    EmployeeDeleteComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  providers: [EmployeeService, InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
