import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Anime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column()
  genre: string;
}
