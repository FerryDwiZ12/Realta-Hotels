import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class DepartmentDto {
  @IsNotEmpty()
  deptName: string;
}


