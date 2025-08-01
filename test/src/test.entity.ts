// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity('test')  // DB 테이블명과 일치시킴
// export class TestEntity {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   name: string;

//   // 테이블 컬럼에 따라 속성 추가
//   // 예: age 컬럼이 있다면
//   // @Column()
//   // age: number;
// }

@Entity('users')
export class TestEntity {
  @PrimaryGeneratedColumn()
  id:  number

  @Column()
  user_id: string;
  
  @Column()
  pw: string;

  @Column({ type: 'timestamp' })
  create_at: Date;
}