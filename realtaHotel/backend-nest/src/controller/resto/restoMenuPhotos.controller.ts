import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { restoMenuPhotoService } from 'src/service/resto/restoMenuPhotos.service';

@Controller('resto-menu-photos')
export class RestoMenuPhotosContoller {
  constructor(private readonly restoMenuPhotosService: restoMenuPhotoService) {}

  @Get()
  findAllRestoMenuPhotos(): Promise<any> {
    return this.restoMenuPhotosService.findAllRestoMenuPhotos();
  }

  @Get(':id')
  findOneRestoMenuPhotos(@Param() params): Promise<any> {
    return this.restoMenuPhotosService.findOneRestoMenuPhotos(params.id);
  }

  @Post()
  createRestoMenuPhotos(@Body() body): Promise<any> {
    return this.restoMenuPhotosService.createRestoMenusPhotos(body);
  }

  @Put(':id')
  updateRestoMenuPhotos(@Param() params: any, @Body() body): any {
    return this.restoMenuPhotosService.updateRestoMenuPhotos(params.id, body);
  }

  @Delete(':id')
  deleteRestoMenuPhotos(@Param() id): any {
    return this.restoMenuPhotosService.deleteRestoMenuPhotos(id.id);
  }
}
