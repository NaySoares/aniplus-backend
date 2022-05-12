import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('animes_title')
class AnimeTitle {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  banner: string;

  @Column()
  background: string

  @Column('text', { array: true })
  season?: string[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }
}

export { AnimeTitle }