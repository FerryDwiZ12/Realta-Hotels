import { Controller, Get } from '@nestjs/common';
import { RestoMenusJoinToAllService } from 'src/service/resto/restoMenusJoinToAll.service';

@Controller('restoMenus')
export class restoMenusJoinToAllController {
  constructor(private restoMenusJoinToAllService: RestoMenusJoinToAllService) {}

  @Get()
  findAllJoinResto() {
    return this.restoMenusJoinToAllService.findAllJoinResto();
  }
}
