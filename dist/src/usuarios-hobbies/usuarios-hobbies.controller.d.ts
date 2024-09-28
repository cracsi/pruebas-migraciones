import { UsuariosHobbiesService } from './usuarios-hobbies.service';
export declare class UsuariosHobbiesController {
    private readonly usuariosHobbiesService;
    constructor(usuariosHobbiesService: UsuariosHobbiesService);
    addUsuarioHobbie(usuarioId: string, hobbieId: string): Promise<[import("../usuarios/entities/usuario.entity").UsuarioEntity, import("../hobbies/entities/hobby.entity").HobbieEntity]>;
    deleteUsuarioHobbie(usuarioId: string, hobbieId: string): Promise<[import("../usuarios/entities/usuario.entity").UsuarioEntity, import("../hobbies/entities/hobby.entity").HobbieEntity]>;
}
