import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestEntity } from 'src/entity/test.entity';
import { WeeklyEntity } from 'src/entity/weekly.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WeeklyService {
  constructor(
    @InjectRepository(WeeklyEntity)
    private testRepository: Repository<WeeklyEntity>,
  ) {}

  findAll(): Promise<WeeklyEntity[]> {
    return this.testRepository.find();
  }
}