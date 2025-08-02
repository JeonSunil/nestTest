import { WeeklyService } from './weekly.service';
import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { TestEntity } from 'src/entity/test.entity';
import { WeeklyEntity } from 'src/entity/weekly.entity';

@Controller('')
export class TestController {
  constructor(
    private readonly testService: TestService,
  private readonly weeklyService: WeeklyService) {}

  @Get('test')
  getAll(): Promise<TestEntity[]> {
    return this.testService.findAll();
  }

  @Get('Weekly')
  getWeekly(): Promise<WeeklyEntity[]> {
    return this.weeklyService.findAll();
  }
}