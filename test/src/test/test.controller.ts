import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { TestEntity } from 'src/test.entity';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getAll(): Promise<TestEntity[]> {
    return this.testService.findAll();
  }
}