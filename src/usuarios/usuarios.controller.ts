import { Controller, Get, Post, Body, Param, Delete, HttpCode, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioEntity } from './entities/usuario.entity';
import { plainToInstance } from 'class-transformer';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  async findAll(){
    return await this.usuariosService.findAll();
  }

  @Get(':usuarioId') 
  async findOne(@Param('usuarioId') usuarioId: string){
    return await this.usuariosService.findOne(usuarioId);
  }

  @Post()
  async create(@Body() usuarioDto: CreateUsuarioDto){

    const usuario = plainToInstance(UsuarioEntity, usuarioDto);
    return await this.usuariosService.create(usuario);
  }

  @Put(':usuarioId')
  async update(@Param('usuarioId') usuarioId: string, @Body() usuarioDto: CreateUsuarioDto){

    const usuario = plainToInstance(UsuarioEntity, usuarioDto);
    return await this.usuariosService.update(usuarioId, usuario);
  }

  @Delete(':usuarioId')
  @HttpCode(204)
  async delete(@Param('usuarioId') usuarioId: string){

    return await this.usuariosService.delete(usuarioId);
  }
}
