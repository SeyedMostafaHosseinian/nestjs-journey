import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'users'})
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @PrimaryColumn()
    username:string

    @PrimaryColumn()
    email:string

    @Column()
    password:string

}
