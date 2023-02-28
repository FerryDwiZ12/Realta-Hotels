import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from 'src/service/humanresource/employee/employee.service';
import { EmployeeDto } from './employee.dto';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  @HttpCode(200)
  findAllEmployee(): Promise<any> {
    return this.employeeService.findAllEmployee();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneEmployee(@Param() param: any): Promise<any> {
    const result = await this.employeeService.findOneEmployee(param.id);

    if (result) {
      return result;
    } else {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('insert')
  @HttpCode(201)
  async createEmployee(@Body() body: EmployeeDto): Promise<any> {
    const result = await this.employeeService.createEmployee(body);

    if (result) {
      return { message: 'Employee created successfully' };
    } else {
      throw new HttpException(
        'Employee created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateEmployee(
    @Param('id') id: number,
    @Body() body: any,
  ): Promise<any> {
    const getOneData = await this.employeeService.findOneEmployee(id);

    if (getOneData) {
      const result = await this.employeeService.updateEmployee(id, body);

      if (result) {
        throw new HttpException(
          'Employee updated successfully',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'Employee updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('delete/:id')
  @HttpCode(200)
  async deleteEmployee(@Param('id') id: number) {
    const getOneData = await this.employeeService.findOneEmployee(id);

    if (getOneData) {
      const result = this.employeeService.deleteEmployee(id);

      if (result) {
        throw new HttpException(
          'Employee deleted successfully',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'Employee deleted failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException('Employee not found', HttpStatus.NOT_FOUND);
    }
  }
}
