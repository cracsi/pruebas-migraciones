import {IsNotEmpty, IsString} from 'class-validator';

export class CreateUsuarioDto {

 @IsString()
 @IsNotEmpty()
 readonly nombres: string;

 @IsString()
 @IsNotEmpty()
 readonly apellidos: string;


 @IsString()
 @IsNotEmpty()
 readonly telefono: string;

}