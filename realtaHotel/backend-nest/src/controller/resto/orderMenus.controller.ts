import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { orderMenusService } from 'src/service/resto/orderMenus.service';

@Controller('order-menus')
export class orderMenusController {
  constructor(private readonly orderMenusService: orderMenusService) {}

  @Get()
  findAllOrderMenus(): Promise<any> {
    return this.orderMenusService.findAllOrderMenus();
  }

  @Get(':id')
  findOneOrderMenus(@Param() Params): Promise<any> {
    return this.orderMenusService.findOneOrderMenus(Params.id);
  }

  @Post()
  createOrderMenus(@Body() body) {
    return this.orderMenusService.createOrderMenus(body);
  }

  @Put(':id')
  updateOrderMenus(@Param() params: any, @Body() body): any {
    return this.orderMenusService.updateOrderMenus(params.id, body);
  }

  @Delete(':id')
  deleteOrderMenus(@Param() params): any {
    return this.orderMenusService.deleteOrderMenus(params.id);
  }
}
