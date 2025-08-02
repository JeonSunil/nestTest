import { Module } from '@nestjs/common';
import { AddController } from './add.controller';
import { AddService } from './add.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from 'src/entity/test.entity';
import { AddWeeklyService } from './addWeekly.service';
import { WeeklyEntity } from 'src/entity/weekly.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([TestEntity]),
    TypeOrmModule.forFeature([WeeklyEntity]),
  ],
  controllers: [AddController],
  providers: [AddService, AddWeeklyService],
})
export class AddModule {}