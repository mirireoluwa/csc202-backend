import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record.entity';
export declare class RecordsService {
    private records;
    create(createRecordDto: CreateRecordDto): Record;
    findAll(): Record[];
    findOne(id: number): Record;
    update(id: number, createRecordDto: CreateRecordDto): Record;
    updateRecordForPatient(patientId: number, recordId: number, createRecordDto: CreateRecordDto): Record;
    remove(id: number): void;
}
