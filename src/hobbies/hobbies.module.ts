import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { HobbiesController } from './hobbies.controller';
import { HobbieEntity } from './entities/hobby.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([HobbieEntity])],
  controllers: [HobbiesController],
  providers: [HobbiesService],
})
export class HobbiesModule {}
