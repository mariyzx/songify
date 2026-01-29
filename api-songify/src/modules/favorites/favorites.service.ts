import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { AddFavoriteDto } from './dto/add-favorite.dto';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) { }

  async addToFavorites(userId: number, addFavoriteDto: AddFavoriteDto) {
    const { songs } = addFavoriteDto;
    const songIds = songs.map((song) => song.id);
    const uniqueSongIds = [...new Set(songIds)];

    const existingSongs = await this.prisma.songs.findMany({
      where: { id: { in: uniqueSongIds } },
    });

    const missingSongIds = uniqueSongIds.filter(
      (id) => !existingSongs.find((song) => song.id === id),
    );

    if (missingSongIds.length > 0) {
      const newSongs = songs.filter((song) => missingSongIds.includes(song.id));

      await this.prisma.songs.createMany({
        data: newSongs.map((song) => ({
          id: song.id,
          title: song.title,
          artist: song.artist,
          album: song.album,
          previewUrl: song.previewUrl ?? '',
        })),
        skipDuplicates: true,
      });
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        favoriteSongs: {
          connect: uniqueSongIds.map((id) => ({ id })),
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        favoriteSongs: true,
      },
    });

    return updatedUser;
  }

  async getFavorites(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: {
        favoriteSongs: true,
      },
    });

    return user?.favoriteSongs || [];
  }

  async removeFavorite(userId: number, songId: number) {
    const song = await this.prisma.songs.findUnique({
      where: { id: songId },
    });

    if (!song) {
      throw new NotFoundException('Song not found');
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { favoriteSongs: true },
    });

    const hasFavorite = user?.favoriteSongs.some((s) => s.id === songId);
    if (!hasFavorite) {
      throw new NotFoundException('Song is not in favorites');
    }

    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        favoriteSongs: {
          disconnect: { id: songId },
        },
      },
      select: {
        id: true,
        name: true,
        email: true,
        favoriteSongs: true,
      },
    });

    return updatedUser;
  }
}
