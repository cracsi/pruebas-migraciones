import { UsuarioEntity } from '../usuarios/entities/usuario.entity';
import { HobbieEntity } from '../hobbies/entities/hobby.entity';
import { Repository } from 'typeorm';
export declare class UsuariosHobbiesService {
    private readonly usuarioRepository;
    private readonly hobbieRepository;
    constructor(usuarioRepository: Repository<UsuarioEntity>, hobbieRepository: Repository<HobbieEntity>);
    addHobbie(usuarioId: string, hobbieId: string): Promise<[UsuarioEntity, HobbieEntity]>;
    deleteHobbie(usuarioId: string, hobbieId: string): Promise<[UsuarioEntity, HobbieEntity]>;
}
