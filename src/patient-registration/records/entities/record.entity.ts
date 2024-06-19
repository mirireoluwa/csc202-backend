// record.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Patient } from '../../patients/entities/patient.entity'; // Adjust the path as necessary

@Entity()
export class Record {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clinicDate: Date;

  @Column()
  natureofAilment: string;

  @Column()
  medicinePrescribed: string;

  @Column()
  dateofAppointment: Date;

  @Column()
  procedureUndertaken: string;

  @ManyToOne(type => Patient, patient => patient.record, { cascade: true })
  patient: Patient;
  patientId: number;
}

