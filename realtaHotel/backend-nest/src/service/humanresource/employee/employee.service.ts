import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from 'entities/Employee';
import { EmployeeDto } from 'src/controller/humanresource/employee/employee.dto';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  // Method untuk menampilkan semua data employee
  async findAllEmployee(): Promise<any> {
    return await this.employeeRepository.find();
  }

  async findOneEmployee(empId: any): Promise<any> {
    return await this.employeeRepository.findOne({
      where: { empId: empId },
    });
  }

  //   method untuk menambahkan data Employee ke database

  async createEmployee(data: EmployeeDto) {
    return await this.employeeRepository.insert({
      empNationalId: data.empNationalId,
      empBirthDate: data.empBirthDate,
      empMaritalStatus: data.empMaritalStatus,
      empGender: data.empGender,
      empHireDate: data.empHireDate,
      empSalariedFlag: data.empSalariedFlag,
      empVacationHours: data.empVacationHours,
      empSickleaveHours: data.empSickleaveHours,
      empCurrentFlag: data.empCurrentFlag,
      empPhoto: data.empPhoto,
      empModifiedDate: new Date(),
    });
  }

  //   method untuk mengubah data employee dari database
  async updateEmployee(empId: number, data: EmployeeDto) {
    return await this.employeeRepository.update(
      {
        empId: empId,
      },
      {
        empNationalId: data.empNationalId,
        empBirthDate: data.empBirthDate,
        empMaritalStatus: data.empMaritalStatus,
        empGender: data.empGender,
        empHireDate: data.empHireDate,
        empSalariedFlag: data.empSalariedFlag,
        empVacationHours: data.empVacationHours,
        empSickleaveHours: data.empSickleaveHours,
        empCurrentFlag: data.empCurrentFlag,
        empPhoto: data.empPhoto,
        empModifiedDate: new Date(),
      },
    );
  }

  //   method untuk menghapus data Employee
  async deleteEmployee(empId: number) {
    return await this.employeeRepository.delete({
      empId: empId,
    });
  }
}
