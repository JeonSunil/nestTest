import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TestEntity } from "src/entity/test.entity";
import { Repository } from "typeorm";
import AddDto from "../dto/add.dto";

@Injectable()
export class AddService {
  constructor(
    @InjectRepository(TestEntity)
    private testRepository: Repository<TestEntity>
  ) {}

    create(data: AddDto): Promise<TestEntity> {
    console.log('💾 저장할 데이터:', data);
    return this.testRepository.save(data);
  }
}