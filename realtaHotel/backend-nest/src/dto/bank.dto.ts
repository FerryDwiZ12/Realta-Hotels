import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class BankDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10, {
    message: 'Bank code is too long!',
  })
  bankCode: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(55, {
    message: 'Bank name is too long!',
  })
  bankName: string;
}
