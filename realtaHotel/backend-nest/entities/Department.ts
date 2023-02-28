import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { EmployeeDepartmentHistory } from "./EmployeeDepartmentHistory";
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

@Index('pk_dept_id', ['deptId'], { unique: true })
@Entity('department', { schema: 'humanresource' })
export class Department {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'dept_id' })
  deptId: number;

  @Column('character varying', {
    name: 'dept_name',
    nullable: true,
    length: 50,
  })
  // @IsNotEmpty()
  // @IsString()
  // @MinLength(3)
  deptName: string | null;

  @Column('timestamp without time zone', {
    name: 'dept_modified_date',
    nullable: true,
    default: () => 'now()',
  })
  deptModifiedDate: Date | null;

  @OneToMany(
    () => EmployeeDepartmentHistory,
    (employeeDepartmentHistory) => employeeDepartmentHistory.edhiDept,
  )
  employeeDepartmentHistories: EmployeeDepartmentHistory[];
}
