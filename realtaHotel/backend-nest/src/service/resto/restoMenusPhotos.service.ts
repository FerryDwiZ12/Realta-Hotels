import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';

@Injectable()
export class RestoMenusPhotosService {
  rempPhotosFilename: string | (() => string);
  constructor(
    @InjectRepository(RestoMenuPhotos)
    private repositoryRestoMenusPhotos: Repository<RestoMenuPhotos>,
  ) {}

  async findAllRestoMenusPhotos(): Promise<any> {
    return await this.repositoryRestoMenusPhotos.query(
      'SELECT * FROM resto.resto_menu_photos',
    );
  }

  async createRestoMenusPhotos(
    data: RestoMenuPhotos,
  ): Promise<RestoMenuPhotos> {
    enum remp_primary {
      notPrimary = '0',
      primary = '1',
    }
    let np = remp_primary.notPrimary;
    let p = remp_primary.primary;

    if (data.rempPrimary == np || data.rempPrimary == p) {
      return await this.repositoryRestoMenusPhotos.save(
        this.repositoryRestoMenusPhotos.create(data),
      );
    } else {
      console.log('error');
    }
  }

  async updateRestoMenusPhotos(
    id: number,
    data: RestoMenuPhotos,
  ): Promise<any> {
    return await this.repositoryRestoMenusPhotos
      .update(
        {
          rempId: id,
        },
        {
          rempPhotoFilename: data.rempPhotoFilename,
        },
      )
      .then(async (result: any) => {
        if (!result) {
          throw new BadRequestException('Data Gagal Di Update');
        }
        return {
          message: 'Data Berhasil d update',
          results: result,
        };
      })
      .catch((err: any) => {
        return {
          message: err.message,
          error: err.name,
        };
      });
  }

  async findByPhotoId(remp_Id: any): Promise<any> {
    return await this.repositoryRestoMenusPhotos
      .findOne({
        where: {
          rempId: remp_Id,
        },
      })
      .then((result: any) => {
        if (!result) {
          throw new NotFoundException('Data not found');
        }
        return {
          message: 'Data displayed successfully',
          results: result,
        };
      })
      .catch((err: any) => {
        return {
          message: err.message,
          error: err.name,
        };
      });
  }

  //upload photos
  async storeFileInfo(
    file: { filename: string; originalname: string },
    body: any,
  ) {
    const fileinfo = new RestoMenuPhotos();
    fileinfo.rempUrl = `http://localhost:3005/resto-menu-photos/public/upload/${file.filename}`;
    fileinfo.rempPhotoFilename = file.filename;
      fileinfo.rempThumbnailFilename = `tumb ${file.originalname}`,
    fileinfo.rempPrimary = body.rempPrimary;
    fileinfo.rempReme = body.rempReme;
      await this.repositoryRestoMenusPhotos.save(fileinfo);

    const res = await this.repositoryRestoMenusPhotos.query(
      'SELECT * FROM resto.resto_menu_photos',
    );
    return { result: res };
  }
}
