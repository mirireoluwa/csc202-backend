import { PatientsService } from './patients.service';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    create(createPatientDto: CreatePatientDto): Promise<import("./entities/patient.entity").Patient>;
    findAll(): Promise<import("./entities/patient.entity").Patient[]>;
    findOne(id: string): Promise<import("./entities/patient.entity").Patient>;
    setRecordById(patientId: number, recordId: number): void;
    update(id: string, updatePatientDto: UpdatePatientDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
