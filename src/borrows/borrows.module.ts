import { Module } from '@nestjs/common';
import { BorrowsService } from './borrows.service';
import { BorrowsController } from './borrows.controller';
import { Borrows } from './borrows.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Borrows])],
  controllers: [BorrowsController],
  providers: [BorrowsService],
})
export class BorrowsModule {}
