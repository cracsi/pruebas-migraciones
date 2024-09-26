import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosHobbyDto } from './create-usuarios-hobby.dto';

export class UpdateUsuariosHobbyDto extends PartialType(CreateUsuariosHobbyDto) {}
