import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { Users } from '../users/user.entity';
import { Books } from '../books/book.entity';

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

  @ManyToOne(() => Users, (users) => users.reservations)
@JoinColumn()
user: Users;

@ManyToOne(() => Books, (books) => books.reservations)
@JoinColumn()
book: Books;
}