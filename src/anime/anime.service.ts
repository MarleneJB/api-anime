import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Anime } from './entities/anime.entity';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

@Injectable()
export class AnimeService {
  constructor(
    @InjectRepository(Anime)
    private animeRepository: Repository<Anime>,
  ) {}

  async findAll(): Promise<Anime[]> {
    return await this.animeRepository.find();
  }

  async findOne(id: number): Promise<Anime> {
    return await this.animeRepository.findOneBy({ id });
  }

  async create(createAnimeDto: CreateAnimeDto): Promise<Anime> {
    const anime = this.animeRepository.create(createAnimeDto);
    return await this.animeRepository.save(anime);
  }

  async update(id: number, updateAnimeDto: UpdateAnimeDto): Promise<Anime> {
    await this.animeRepository.update(id, updateAnimeDto);
    return this.animeRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.animeRepository.delete(id);
  }
}
