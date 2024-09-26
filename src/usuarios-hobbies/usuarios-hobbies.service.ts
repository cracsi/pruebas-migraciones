import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from '../usuarios/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HobbieEntity } from '../hobbies/entities/hobby.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosHobbiesService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
 
    @InjectRepository(HobbieEntity)
    private readonly hobbieRepository: Repository<HobbieEntity>
) {}

async addHobbie(usuarioId: string, hobbieId: string):Promise<[UsuarioEntity, HobbieEntity]> {
    const hobbie: HobbieEntity = await this.hobbieRepository.findOne({where: {id: hobbieId}, relations: ["usuarios"]});
    
   
    const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where: {id: usuarioId},  relations: ["hobbies"]}); 
    
    usuario.hobbies = [...usuario.hobbies , hobbie];
    hobbie.usuarios = [...hobbie.usuarios,usuario];
    
    
    return  [await this.usuarioRepository.save(usuario), await this.hobbieRepository.save(hobbie)];
  }
 
 
async deleteHobbie(usuarioId: string, hobbieId: string):Promise<[UsuarioEntity, HobbieEntity]>{
  
    const hobbie: HobbieEntity = await this.hobbieRepository.findOne({where: {id: hobbieId}, relations: ["usuarios"]});
    
 
    const usuario: UsuarioEntity = await this.usuarioRepository.findOne({where: {id: usuarioId},  relations: ["hobbies"]});
    
 
    const hobbiee: HobbieEntity = usuario.hobbies.find(e => e.id === hobbie.id);
    

    const usuarioo: UsuarioEntity = hobbie.usuarios.find(e => e.id === usuario.id);
    

    usuario.hobbies = usuario.hobbies.filter(e => e.id !== hobbieId);
    hobbie.usuarios = hobbie.usuarios.filter(e => e.id !== usuarioId);
    return [await this.usuarioRepository.save(usuario),await this.hobbieRepository.save(hobbie)]
}
}
