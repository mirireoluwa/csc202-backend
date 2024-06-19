import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { Repository } from 'typeorm';
export declare class PatientsService {
    private patientsRepository;
    [x: string]: any;
    unsetRecordById(patientId: number): void;
    setRecordById(patientId: number, recordId: number): void;
    constructor(patientsRepository: Repository<Patient>);
    create(createPatientDto: CreatePatientDto): Promise<Patient>;
    findAll(): Promise<Patient[]>;
    findOne(id: number): Promise<Patient>;
    update(id: number, updatePatientDto: UpdatePatientDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    setUserById(patientId: number, userId: number): Promise<void>;
    unsetUserById(patientId: number): Promise<void>;
}
