import { Record } from "../../../patient-registration/records/entities/record.entity";
export declare class Patient {
    id: number;
    firstName: string;
    surName: string;
    middleName: string;
    dateOfBirth: Date;
    dateOfRegistration: Date;
    homeAddress: string;
    _matriculationNumber: boolean;
    record: Record;
}
