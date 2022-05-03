import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Students {

    @PrimaryGeneratedColumn()
    id: number

    @Column({unique: true})
    fullName: string

    @Column()
    age: number

    @Column()
    classRoom: string

}
