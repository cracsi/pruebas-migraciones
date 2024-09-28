import { HobbiesService } from './hobbies.service';
import { CreateHobbieDto } from './dto/create-hobby.dto';
import { HobbieEntity } from './entities/hobby.entity';
export declare class HobbiesController {
    private readonly hobbiesService;
    constructor(hobbiesService: HobbiesService);
    findAll(): Promise<HobbieEntity[]>;
    findOne(hobbieId: string): Promise<HobbieEntity>;
    create(hobbieDto: CreateHobbieDto): Promise<HobbieEntity>;
    update(hobbieId: string, hobbieDto: CreateHobbieDto): Promise<HobbieEntity>;
    delete(hobbieId: string): Promise<void>;
}
