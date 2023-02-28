/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BankService } from 'src/service/payment/bank/bank.service';
import { BankDto } from 'src/dto/bank.dto';

@Controller('bank')
export class BankController {
  constructor(private bankService: BankService) {}

  // Find All Bank
  @Get()
  async findAllBank() {
    return await this.bankService.find();
  }

  // Find Bank by ID
  @Get(':id')
  async findBankById(@Param('id') id: number) {
    return await this.bankService.find(id);
  }

  // Update Bank
  @Put(':id')
  async updateBank(@Param('id') id: number, @Body() body: BankDto) {
    return await this.bankService.update(id, body);
  }

  @Post()
  async insertBank(@Body() body: BankDto) {
    return await this.bankService.insert(body);
  }

  @Delete(':id')
  async deleteBank(@Param('id') id: number) {
    return await this.bankService.delete(id);
  }
}
