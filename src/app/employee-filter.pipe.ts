import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(employees:Employee[], filterCondition:string): Employee[] {
    if (!employees || !filterCondition) return employees;

    return employees.filter(employee => employee.name.toLowerCase().startsWith(filterCondition.toLowerCase()));
  }

}
