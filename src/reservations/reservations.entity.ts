import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
} from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';

@Entity()
export class Reservations {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'date',
    nullable: false,
  })
  reservationDate: Date;

  @Column({
    type: 'date',
    nullable: false,
  })
  expiryDate: Date;

  @Column({
    type: 'varchar',
    length: 50,
    unique: false,
    nullable: false,
  })
  status: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
}