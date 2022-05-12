import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('animes_season')
class AnimeSeason {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  debut: string
  
  @Column()
  position: number;
  
  @Column()
  type: string;
  
  @Column()
  cover: string;

  @Column('text', { array: true })
  video?: string[];
  
  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4()
    }
  }
}

export { AnimeSeason }