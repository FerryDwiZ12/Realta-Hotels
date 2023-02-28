import { IsNotEmpty, IsString, IsOptional, MaxLength } from 'class-validator';

export class UserAccountsDto {
    
    @IsNotEmpty()
    userId: number;

    @IsNotEmpty()
    accountType: string;
    
    @IsNotEmpty()
    securedKey: string;

    @IsOptional()
    cardHolderName: string;

    @IsOptional()
    entityName: string;

    @IsOptional()
    accountNumber: string;

    @IsOptional()
    expMonth: number;

    @IsOptional()
    expYear: number;
}