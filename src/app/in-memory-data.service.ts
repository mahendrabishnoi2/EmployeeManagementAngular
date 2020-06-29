import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const employees = [
      {
        id: 1,
        name: "Ram",
        location: "Bangalore",
        email: "ram@mail.com",
        mobile: "9867512345"
      },
      {
        id: 2,
        name: "Raj",
        location: "Chennai",
        email: "raj@mail.com",
        mobile: "7867534521"
      },
      {
        id: 3,
        name: "Vinay",
        location: "Pune",
        email: "vinay@mail.com",
        mobile: "9975287450"
      }
    ];
    return {employees};
  }

  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 1;
  }
}
