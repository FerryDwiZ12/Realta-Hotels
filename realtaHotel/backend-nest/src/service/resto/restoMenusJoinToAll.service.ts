import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderMenuDetail } from 'entities/OrderMenuDetail';
import { RestoMenuPhotos } from 'entities/RestoMenuPhotos';
import { RestoMenus } from 'entities/RestoMenus';
import { Repository } from 'typeorm';

@Injectable()
export class RestoMenusJoinToAllService {
  constructor(
    @InjectRepository(RestoMenus)
    private restoRepository: Repository<RestoMenus>,

    @InjectRepository(RestoMenuPhotos)
    private restoMenuPhotosRepository: Repository<RestoMenuPhotos>,

    @InjectRepository(OrderMenuDetail)
    private orderMenuDetailRepository: Repository<OrderMenuDetail>,
  ) {}

  async findAllJoinResto(): Promise<any> {
    return await this.restoRepository
      .query(
        `
    SELECT * FROM resto.resto_menus rrs
    LEFT JOIN resto.resto_menu_photos rrmp ON rrmp.remp_reme_id = rrs.reme_id
    LEFT JOIN resto.order_menu_detail romd ON romd.omde_reme_id = rrs.reme_id
    LEFT JOIN resto.order_menus rom ON romd.omde_orme_id = rom.orme_id
    ORDER BY reme_id DESC
     `,
      )
      .then((result: any) => {
        const Keranjang = result;
        result.map((item, index) => {
          Keranjang[index].reme_quantity = 1;
        });
        if (!result) {
          throw new NotFoundException('Data Not Found');
        }
        console.log(Keranjang);
        return {
          message: 'Data displayed successfully',
          results: Keranjang,
        };
      })
      .catch((err: any) => {
        return {
          message: err.message,
          error: err.name,
        };
      });
  }
}
