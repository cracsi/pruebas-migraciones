import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<UsuarioEntity[]>;
    findOne(usuarioId: string): Promise<UsuarioEntity>;
    create(usuarioDto: CreateUsuarioDto): Promise<UsuarioEntity>;
    update(usuarioId: string, usuarioDto: CreateUsuarioDto): Promise<UsuarioEntity>;
    delete(usuarioId: string): Promise<void>;
}
