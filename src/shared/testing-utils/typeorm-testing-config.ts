import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from '../../usuarios/entities/usuario.entity';
import { HobbieEntity } from '../../hobbies/entities/hobby.entity';

export const TypeOrmTestingConfig = () => [
 TypeOrmModule.forRoot({
   type: 'sqlite',
   database: ':memory:',
   dropSchema: true,
   entities: [UsuarioEntity, HobbieEntity],
   synchronize: true,
   keepConnectionAlive: true
 }),
 TypeOrmModule.forFeature([UsuarioEntity, HobbieEntity]),
];