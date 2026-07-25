import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
  JoinColumn
} from 'typeorm';
import { PrimaryGeneratedColumn } from 'typeorm/browser';
import { Categories } from '../categories/categories.entity';
import { Borrows } from '../borrows/borrows.entity';
import { Reservations } from 'src/reservations/reservations.entity';

@Entity()
export class Books {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 500,
    unique: false,
    nullable: false,
  })
  title: string;

  @Column({
    type: 'varchar',
    length: 500,
    unique: false,
    nullable: false,
  })
  author: string;

  @Column({
    type: 'varchar',
    length: 100,
    unique: true,
    nullable: false,
  })
  isbn: string;

  @Column({
    type: 'varchar',
    length: 500,
    unique: false,
    nullable: false,
  })
  publisher: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  publicationYear: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  totalCopies: number;

  @Column({
    type: 'int',
    nullable: false,
  })
  availableCopies: number;

  @Column({
    type: 'varchar',
    length: 1000,
    unique: false,
    nullable: true,
  })
  coverImage: string;

  @Column({
    type: 'varchar',
    length: 2000,
    unique: false,
    nullable: true,
  })
  description: string;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @ManyToOne(() => Categories, (categories) => categories.books)
  @JoinColumn()
    category: Categories;

  @OneToMany(() => Borrows, (borrows) => borrows.book)
    borrows: Borrows[];
  
  @OneToMany(() => Reservations, (reservations) => reservations.book)
    reservations: Reservations[];
}