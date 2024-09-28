import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
){}


async findAll(): Promise<UsuarioEntity[]> {
  return await this.usuarioRepository.find({ relations: ["hobbies"] });
}

async findOne(id: string): Promise<UsuarioEntity> {
  const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where: {id}, relations: ["hobbies"]} );
  

  return usuario;
}

async create(usuario: UsuarioEntity): Promise<UsuarioEntity> {
  return await this.usuarioRepository.save(usuario);
}

async update(id: string, usuario: UsuarioEntity): Promise<UsuarioEntity> {
  const persistedUsuario: UsuarioEntity = await this.usuarioRepository.findOne({where:{id}});
  
  
  return await this.usuarioRepository.save({...persistedUsuario, ...usuario});
}

async delete(id: string) {
  const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where:{id}});


  await this.usuarioRepository.remove(usuario);
}
}
