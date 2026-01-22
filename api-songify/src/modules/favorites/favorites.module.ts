import { FavoritesController } from './favorites.controller';
import { FavoritesService } from './favorites.service';

export class FavoritesModule {
  imports: [FavoritesService];
  controllers: [FavoritesController];
  providers: [FavoritesService];
  exports: [FavoritesService];
}
