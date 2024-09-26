import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { UsuariosHobbiesService } from './usuarios-hobbies.service';
import { CreateUsuariosHobbyDto } from './dto/create-usuarios-hobby.dto';
import { UpdateUsuariosHobbyDto } from './dto/update-usuarios-hobby.dto';

@Controller('usuarios-hobbies')
export class UsuariosHobbiesController {
  constructor(private readonly usuariosHobbiesService: UsuariosHobbiesService) {}

  @Post(':usuarioId/:hobbieId')
    async addUsuarioHobbie(@Param('usuarioId') usuarioId: string, @Param ('hobbieId') hobbieId: string){
        
        
        return await this.usuariosHobbiesService.addHobbie(usuarioId, hobbieId);
    }

    
    
    
    @Delete(':usuarioId/:hobbieId')
    @HttpCode(204)
    async deleteUsuarioHobbie(@Param('usuarioId') usuarioId: string, @Param('hobbieId') hobbieId: string){
        
        return await this.usuariosHobbiesService.deleteHobbie(usuarioId, hobbieId);
    }
}
