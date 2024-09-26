import { Injectable } from '@nestjs/common';
import { CreateHobbieDto } from './dto/create-hobby.dto';
import { UpdateHobbyDto } from './dto/update-hobby.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HobbieEntity } from './entities/hobby.entity';
import { Repository } from 'typeorm';

@Injectable()
export class HobbiesService {
  constructor(
    @InjectRepository(HobbieEntity)
    private readonly hobbieRepository: Repository<HobbieEntity>
){}


async findAll(): Promise<HobbieEntity[]> {
  return await this.hobbieRepository.find({ relations: ["usuarios"] });
}

async findOne(id: string): Promise<HobbieEntity> {
  const hobbie: HobbieEntity = await this.hobbieRepository.findOne({where: {id}, relations: ["usuarios"] } );
  

  return hobbie;
}

async create(hobbie: HobbieEntity): Promise<HobbieEntity> {
  return await this.hobbieRepository.save(hobbie);
}

async update(id: string, hobbie: HobbieEntity): Promise<HobbieEntity> {
  const persistedHobbie: HobbieEntity = await this.hobbieRepository.findOne({where:{id}});
  
  
  return await this.hobbieRepository.save({...persistedHobbie, ...hobbie});
}

async delete(id: string) {
  const hobbie: HobbieEntity = await this.hobbieRepository.findOne({where:{id}});
  

  await this.hobbieRepository.remove(hobbie);
}
}
