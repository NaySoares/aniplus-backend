import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  @Column()
  avatar: string;

  @Column("text", { array: true })
  animes_recents: string[];

  @Column("text", { array: true })
  animes_complete: string[];

  @Column("text", { array: true })
  animes_dropped: string[];

  @Column("text", { array: true })
  wishlist: string[];

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuidV4();
      this.isAdmin = false;
    }
  }
}

export { User }