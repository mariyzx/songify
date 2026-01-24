import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  UseGuards,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { FavoritesService } from './favorites.service';
import { AddFavoriteDto } from './dto/add-favorite.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../../common/decorators/current-user.decorator';
import type { CurrentUser as CurrentUserType } from '../../common/types/current-user.interface';

@ApiTags('favorites')
@ApiBearerAuth()
@Controller('favorites')
@UseGuards(JwtAuthGuard)
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @ApiOperation({ summary: 'Adicionar músicas aos favoritos' })
  addToFavorites(
    @CurrentUser() user: CurrentUserType,
    @Body() addFavoriteDto: AddFavoriteDto,
  ) {
    return this.favoritesService.addToFavorites(user.id, addFavoriteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar músicas favoritas' })
  getFavorites(@CurrentUser() user: CurrentUserType) {
    return this.favoritesService.getFavorites(user.id);
  }

  @Delete(':songId')
  @ApiOperation({ summary: 'Remover música dos favoritos' })
  removeFavorite(
    @CurrentUser() user: CurrentUserType,
    @Param('songId', ParseIntPipe) songId: number,
  ) {
    return this.favoritesService.removeFavorite(user.id, songId);
  }
}
