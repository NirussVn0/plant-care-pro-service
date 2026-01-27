import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Plant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  scientificName: string;

  @Column()
  room: string;

  @Column('simple-json')
  images: string[];

  @Column()
  location: string;

  @Column('simple-json')
  needs: {
    light: string;
    water: string;
    humidity: string;
  };

  @Column()
  health: number;

  @Column()
  category: string;

  @Column()
  difficulty: string;

  @Column()
  petFriendly: boolean;

  @Column({ nullable: true })
  lastWatered: Date;

  @Column({ nullable: true })
  nextWatering: Date;

  @Column('simple-json', { nullable: true })
  tags: string[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  userId: string;
}
