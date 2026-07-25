import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { Borrows } from '../borrows/borrows.entity';
import { Reservations } from 'src/reservations/reservations.entity';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 500,
    unique: false,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 500,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 20,
    unique: true,
    nullable: false,
  })
  phone: string;

  @Column({
    type: 'varchar',
    length: 1000,
    unique: false,
    nullable: false,
  })
  address: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToMany(() => Borrows, (borrows) => borrows.user)
    borrows: Borrows[];

  @OneToMany(() => Reservations, (reservations) => reservations.user)
    reservations: Reservations[];
}