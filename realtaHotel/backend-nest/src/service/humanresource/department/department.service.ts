import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from 'entities/Department';
import { DepartmentDto } from 'src/controller/humanresource/department/department.dto'; 

const date = new Date();
@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}

  // Method untuk menampilkan semua data department
  async findAllDepartment(): Promise<any> {
    return await this.departmentRepository.find();
  }

  // Method untuk menampilkan semua data department by PK
  async findOneDepartment(deptId: any): Promise<any> {
    return await this.departmentRepository.findOne({
      where: { deptId: deptId },
    });
  }

  //   method untuk menambahkan data Department ke database

  async createDepartment(data: any) {
    return await this.departmentRepository.insert({
      deptName: data.deptName,
    });
  }

  //   method untuk mengubah data department dari database
  async updateDepartment(deptId: number, data: DepartmentDto) {
    return await this.departmentRepository.update(
      {
        deptId: deptId,
      },
      {
        deptName: data.deptName,
        deptModifiedDate: date,
      },
    );
  }

  //   method untuk menghapus data Department
  async deleteDepartment(deptId: number) {
    return await this.departmentRepository.delete({
      deptId: deptId,
    });
  }
}
