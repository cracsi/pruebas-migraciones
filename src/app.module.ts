import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { dataSourceOptions } from 'db/data-source';
import { HobbiesModule } from './hobbies/hobbies.module';
import { UsuariosHobbiesModule } from './usuarios-hobbies/usuarios-hobbies.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions),UsuariosModule, HobbiesModule, UsuariosHobbiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
