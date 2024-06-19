import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';
export declare class RecordsController {
    private readonly recordsService;
    constructor(recordsService: RecordsService);
    create(createRecordDto: CreateRecordDto): import("./entities/record.entity").Record;
    findAll(): import("./entities/record.entity").Record[];
    findOne(id: string): import("./entities/record.entity").Record;
    update(id: string, createRecordDto: CreateRecordDto): import("./entities/record.entity").Record;
    updateRecordForPatient(patientId: string, recordId: string, createRecordDto: CreateRecordDto): import("./entities/record.entity").Record;
    remove(id: string): void;
}
