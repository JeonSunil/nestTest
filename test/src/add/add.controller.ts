import { Body, Controller, Post } from "@nestjs/common";
import { AddService } from "./add.service";
import AddDto from "../dto/add.dto";
import { TestEntity } from "src/entity/test.entity";
import WeeklyDto from "src/dto/weekly.dto";
import { WeeklyEntity } from "src/entity/weekly.entity";
import { AddWeeklyService } from "./addWeekly.service";

@Controller('')
export class AddController {
  constructor(
    private readonly addService: AddService,
    private readonly addWeeklyService: AddWeeklyService,
  )
  {}

  @Post('add')
  create(@Body() data:AddDto): Promise<TestEntity> {
    console.log('📨 받은 요청 데이터:', data);
    return this.addService.create(data);
  } 

  @Post('weekly')
  createWeekly(@Body() data:WeeklyDto): Promise<WeeklyEntity> {
    console.log('📨 받은 요청 데이터:', data);
    return this.addWeeklyService.create(data);
  } 
}