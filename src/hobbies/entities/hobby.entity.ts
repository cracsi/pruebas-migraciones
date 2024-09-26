import { UsuarioEntity } from '../../usuarios/entities/usuario.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class HobbieEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    nombre: string;

    
    @Column()
    descripcion: string;

    @ManyToMany(() => UsuarioEntity, (usuario) => usuario.hobbies)
    usuarios: UsuarioEntity[];
}