import { Module } from '@nestjs/common';
import { UsuariosHobbiesService } from './usuarios-hobbies.service';
import { UsuariosHobbiesController } from './usuarios-hobbies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from 'src/usuarios/entities/usuario.entity';
import { HobbieEntity } from 'src/hobbies/entities/hobby.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity,HobbieEntity])],
  controllers: [UsuariosHobbiesController],
  providers: [UsuariosHobbiesService],
})
export class UsuariosHobbiesModule {}
