import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from 'src/entity/test.entity';
import { WeeklyEntity } from 'src/entity/weekly.entity';
import { WeeklyService } from './weekly.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([TestEntity]),
    TypeOrmModule.forFeature([WeeklyEntity]),
],
  controllers: [TestController],
  providers: [TestService, WeeklyService],
})
export class TestModule {}