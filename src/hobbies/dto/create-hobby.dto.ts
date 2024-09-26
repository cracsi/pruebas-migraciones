import {IsNotEmpty, IsNumber, IsString, IsUrl} from 'class-validator';
export class CreateHobbieDto {

 @IsString()
 @IsNotEmpty()
 readonly nombre: string;

 @IsString()
 @IsNotEmpty()
 readonly descripcion: string;


}