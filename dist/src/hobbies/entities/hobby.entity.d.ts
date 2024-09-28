import { UsuarioEntity } from '../../usuarios/entities/usuario.entity';
export declare class HobbieEntity {
    id: string;
    nombre: string;
    descripcion: string;
    usuarios: UsuarioEntity[];
}
