import { HobbieEntity } from '../../hobbies/entities/hobby.entity';
export declare class UsuarioEntity {
    id: string;
    nombres: string;
    apellidos: string;
    telefono: string;
    hobbies: HobbieEntity[];
}
