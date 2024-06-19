import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Record } from "../../../patient-registration/records/entities/record.entity";

@Entity()
export class Patient {
  @PrimaryGeneratedColumn() id: number;
  @Column() firstName: string;
  @Column() surName: string;
  @Column() middleName: string;
  @Column() dateOfBirth: Date;
  @Column() dateOfRegistration: Date;
  @Column() homeAddress: string
  @Column({ default: true }) _matriculationNumber: boolean;
  @JoinColumn()
  @OneToMany(type => Record, record => record.patient)
  record: Record;
}
