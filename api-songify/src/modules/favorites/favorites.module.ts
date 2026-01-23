import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [FavoritesController],
  providers: [FavoritesService],
  exports: [FavoritesService],
})
export class FavoritesModule {}
