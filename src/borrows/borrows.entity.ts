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
export class Borrows {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'date',
    nullable: false,
  })
  borrowDate: Date;

  @Column({
    type: 'date',
    nullable: false,
  })
  dueDate: Date;

  @Column({
    type: 'date',
    nullable: true,
  })
  returnDate: Date;

  @Column({
    type: 'varchar',
    length: 50,
    unique: false,
    nullable: false,
  })
  status: string;

  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
    default: 0,
  })
  fine: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;
  
  @ManyToOne(() => Users, (users) => users.borrows)
  @JoinColumn()
    user: Users;
  @ManyToOne(() => Books, (books) => books.borrows)
  @JoinColumn()
    book: Books;
}