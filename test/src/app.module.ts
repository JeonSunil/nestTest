import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestEntity } from './test.entity';
import { TestController } from './test/test.controller';
import { TestService } from './test/test.service';
import { TestModule } from './test/test.modules';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'jeonsunil',
      database: 'test',
      entities: [TestEntity],
      synchronize: false,
    }),
    TestModule,
  ],
  controllers: [AppController,],
  providers: [AppService,],
})
export class AppModule {}

// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { TestEntity } from './test.entity';  // 나중에 생성할 엔티티

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',         // 실제 DB 호스트
//       port: 5432,                // 기본 포트
//       username: 'your_username', // DB 유저명
//       password: 'your_password', // DB 비밀번호
//       database: 'test',          // 연결할 DB 이름
//       entities: [TestEntity],    // 엔티티 연결 (아래에서 정의)
//       synchronize: true,         // 개발 중에는 true (테이블 자동 생성)
//     }),
//     TypeOrmModule.forFeature([TestEntity]), // Repository 주입을 위해 필요
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}