import { PartialType } from '@nestjs/mapped-types';
import { CreateHobbieDto } from './create-hobby.dto';

export class UpdateHobbyDto extends PartialType(CreateHobbieDto) {}
