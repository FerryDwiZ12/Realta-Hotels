import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DepartmentService } from 'src/service/humanresource/department/department.service';
import { DepartmentDto } from './department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  @HttpCode(200)
  findAllDepartment(): Promise<any> {
    return this.departmentService.findAllDepartment();
  }

  @Get(':id')
  @HttpCode(200)
  async findOneDepartment(@Param() param: any): Promise<any> {
    const result = await this.departmentService.findOneDepartment(param.id);

    if (result) {
      return result;
    } else {
      throw new HttpException('Department not found', HttpStatus.NOT_FOUND);
    }
  }

  @Post('insert')
  @HttpCode(201)
  async createDepartment(@Body() body: DepartmentDto): Promise<any> {
    const result = await this.departmentService.createDepartment(body);

    if (result) {
      return { message: 'Department created successfully' };
    } else {
      throw new HttpException(
        'Department created failed',
        HttpStatus.EXPECTATION_FAILED,
      );
    }
  }

  @Put('update/:id')
  @HttpCode(200)
  async updateDepartment(
    @Param('id') id: number,
    @Body() body: DepartmentDto,
  ): Promise<any> {
    const getOneData = await this.departmentService.findOneDepartment(id);

    if (getOneData) {
      const result = await this.departmentService.updateDepartment(id, body);

      if (result) {
        throw new HttpException(
          'Department updated successfully',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'Department updated failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException('Department not found', HttpStatus.NOT_FOUND);
    }
  }

  @Delete('delete/:id')
  @HttpCode(200)
  async deleteDepartment(@Param('id') id: number) {
    const getOneData = await this.departmentService.findOneDepartment(id);

    if (getOneData) {
      const result = this.departmentService.deleteDepartment(id);

      if (result) {
        throw new HttpException(
          'Department deleted successfully',
          HttpStatus.ACCEPTED,
        );
      } else {
        throw new HttpException(
          'Department deleted failed',
          HttpStatus.EXPECTATION_FAILED,
        );
      }
    } else {
      throw new HttpException('Department not found', HttpStatus.NOT_FOUND);
    }
  }
}
