import { HobbieEntity } from '../../hobbies/entities/hobby.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class UsuarioEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    nombres: string;

    @Column()
    apellidos: string;

    @Column()
    telefono: string;

    @ManyToMany(() => HobbieEntity, (hobbie) => hobbie.usuarios)
    @JoinTable()
    hobbies: HobbieEntity[];
}