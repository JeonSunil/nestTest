import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { WeeklyEntity } from "src/entity/weekly.entity";
import WeeklyDto from "src/dto/weekly.dto";

@Injectable()
export class AddWeeklyService {
  constructor(
    @InjectRepository(WeeklyEntity)
    private weeklyRepository: Repository<WeeklyEntity>
  ) {}

    create(data: WeeklyDto): Promise<WeeklyEntity> {
    console.log('💾 저장할 데이터:', data);
    return this.weeklyRepository.save(data);
  }
}