/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Bank } from 'entities/Bank';
import { BankDto } from 'src/dto/bank.dto';
import { Repository } from 'typeorm';

@Injectable()
export class BankService {
  constructor(
    @InjectRepository(Bank)
    private BankRepository: Repository<Bank>,
  ) {}

  async find(id?: number) {
    if (id) {
      // Return bank with `where` clause
      return await this.BankRepository.findOneByOrFail({
        bankEntityId: id,
      })
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return new HttpException(
            { error: `Bank with ID ${id} is not found!` },
            HttpStatus.NOT_FOUND,
            { cause: err },
          );
        });
    } else {
      // Return all bank record
      return await this.BankRepository.find()
        .then((result) => {
          return result;
        })
        .catch((err) => {
          return err;
        });
    }
  }

  async findByBankCode(code: string): Promise<any> {
    return await this.BankRepository.findOneByOrFail({
      bankCode: code,
    })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        return err;
      });
  }

  async update(id: number, dataToUpdate: BankDto) {
    // Check if bank exists.
    const bankExists = await this.find(id);

    // Return error if bank is not exists, else delete bank by ID
    if (bankExists instanceof HttpException) {
      return bankExists.getResponse();
    } else {
      return await this.BankRepository.update(
        // Criteria
        {
          bankEntityId: id,
        },
        dataToUpdate,
      ).then(() => {
        return `Bank with ID ${id} is successfully updated!`;
      });
    }
  }

  async insert(newData: BankDto) {
    return await this.BankRepository.query(`CALL payment.InsertBank($1, $2)`, [
      newData.bankCode.toString(),
      newData.bankName,
    ])
      .then(() => {
        return this.findByBankCode(newData.bankCode.toString());
      })
      .catch((err) => {
        return "There's an error in adding new Bank data, " + err;
      });
  }

  async delete(id: number) {
    // Check if bank exists.
    const bankExists = await this.find(id);

    // Return error if bank is not exists, else delete bank by ID
    if (bankExists instanceof HttpException) {
      return bankExists.getResponse();
    } else {
      return await this.BankRepository.delete(id).then(() => {
        return `Bank with ID ${id} is successfully deleted!`;
      });
    }
  }
}
