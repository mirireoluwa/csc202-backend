import { Patient } from '../../patients/entities/patient.entity';
export declare class Record {
    id: number;
    clinicDate: Date;
    natureofAilment: string;
    medicinePrescribed: string;
    dateofAppointment: Date;
    procedureUndertaken: string;
    patient: Patient;
    patientId: number;
}
