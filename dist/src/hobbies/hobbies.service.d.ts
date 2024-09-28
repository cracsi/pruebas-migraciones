import { HobbieEntity } from './entities/hobby.entity';
import { Repository } from 'typeorm';
export declare class HobbiesService {
    private readonly hobbieRepository;
    constructor(hobbieRepository: Repository<HobbieEntity>);
    findAll(): Promise<HobbieEntity[]>;
    findOne(id: string): Promise<HobbieEntity>;
    create(hobbie: HobbieEntity): Promise<HobbieEntity>;
    update(id: string, hobbie: HobbieEntity): Promise<HobbieEntity>;
    delete(id: string): Promise<void>;
}
