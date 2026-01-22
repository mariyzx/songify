import {
  IsArray,
  ValidateNested,
  IsString,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class SongDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  id: number;

  @ApiProperty({ example: 'Bohemian Rhapsody' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Queen' })
  @IsString()
  @IsNotEmpty()
  artist: string;

  @ApiProperty({ example: 'A Night at the Opera' })
  @IsString()
  @IsNotEmpty()
  album: string;

  @ApiProperty({ example: 'https://preview-url.com' })
  @IsString()
  @IsNotEmpty()
  previewUrl: string;
}

export class AddFavoriteDto {
  @ApiProperty({ type: [SongDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SongDto)
  songs: SongDto[];
}
