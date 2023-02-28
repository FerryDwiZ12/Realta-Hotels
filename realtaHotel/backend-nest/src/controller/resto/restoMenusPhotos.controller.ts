import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { RestoMenusPhotosService } from 'src/service/resto/restoMenusPhotos.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer, diskStorage } from 'multer';
import { Express } from 'express';
import { join } from 'path';
import multer from 'multer';

@Controller('resto-menus-photos')
export class RestoMenusPhotosContoller {
  constructor(private readonly restoPhotosService: RestoMenusPhotosService) {}

  @Get()
  findAllRestoMenusPhotos() {
    return this.restoPhotosService.findAllRestoMenusPhotos();
  }
  
  @Post()
  async createRestoMenusPhotos(@Body() data: RestoMenuPhotos) {
    const resto = await this.restoPhotosService.createRestoMenusPhotos(data);
    if (!resto) {
      return 'failed insert to resto menus photos ';
    } else {
      return 'succes insert to restp menus photos';
    }
  }

  @Put(':id')
  async updateRestoMenusPhotos(@Param('id') id: number, @Body() body: any) {
    const newData: any = await this.restoPhotosService.updateRestoMenusPhotos(
      id,
      body,
    );

    if (!newData) {
      return 'dont updated';
    } else {
      return 'updated';
    }
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: 'public/upload',
      storage: diskStorage({
        destination: 'public/upload',
        filename(req, file, cb) {
          return cb(null, file.originalname);
        },
      }),
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() body) {
    const result = await this.restoPhotosService.storeFileInfo(file, body);
    if (!result) {
      return {
        message: 'berhasil upload',
        result: result.result,
      };
    }
  }

  @Get('public/upload/:fileName')
  getPhoto(@Param('fileName') fileName: string, @Res() res) {
    return res.sendFile(fileName, { root: join('public/upload') });
  }
}
