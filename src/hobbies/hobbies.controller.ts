import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Put } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { CreateHobbieDto } from './dto/create-hobby.dto';
import { plainToInstance } from 'class-transformer';
import { HobbieEntity } from './entities/hobby.entity';

@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbiesService: HobbiesService) {}

  @Get()
  async findAll(){
    return await this.hobbiesService.findAll();
  }

  @Get(':hobbieId') 
  async findOne(@Param('hobbieId') hobbieId: string){
    return await this.hobbiesService.findOne(hobbieId);
  }

  @Post()
  async create(@Body() hobbieDto: CreateHobbieDto){

    const hobbie = plainToInstance(HobbieEntity, hobbieDto);
    return await this.hobbiesService.create(hobbie);
  }

  @Put(':hobbieId')
  async update(@Param('hobbieId') hobbieId: string, @Body() hobbieDto: CreateHobbieDto){

    const hobbie = plainToInstance(HobbieEntity, hobbieDto);
    return await this.hobbiesService.update(hobbieId, hobbie);
  }

  @Delete(':hobbieId')
  @HttpCode(204)
  async delete(@Param('hobbieId') hobbieId: string){

    return await this.hobbiesService.delete(hobbieId);
  }
}
