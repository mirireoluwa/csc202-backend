"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordsService = void 0;
const common_1 = require("@nestjs/common");
let RecordsService = class RecordsService {
    constructor() {
        this.records = [];
    }
    create(createRecordDto) {
        const newRecord = {
            id: this.records.length + 1,
            clinicDate: new Date(createRecordDto.clinicDate),
            natureofAilment: createRecordDto.natureOfAilment,
            medicinePrescribed: createRecordDto.medicinePrescribed,
            dateofAppointment: createRecordDto.dateofAppointment,
            procedureUndertaken: '',
            patient: null,
            patientId: createRecordDto.patientId
        };
        this.records.push(newRecord);
        return newRecord;
    }
    findAll() {
        return this.records;
    }
    findOne(id) {
        const record = this.records.find(record => record.id === id);
        if (!record) {
            throw new common_1.NotFoundException(`Record with ID ${id} not found`);
        }
        return record;
    }
    update(id, createRecordDto) {
        const record = this.findOne(id);
        Object.assign(record, createRecordDto);
        return record;
    }
    updateRecordForPatient(patientId, recordId, createRecordDto) {
        const recordIndex = this.records.findIndex(record => record.id === recordId && record.patientId === patientId);
        if (recordIndex === -1) {
            throw new common_1.NotFoundException(`Record with ID ${recordId} for Patient with ID ${patientId} not found`);
        }
        const updatedRecord = {
            ...this.records[recordIndex],
            ...createRecordDto,
            clinicDate: new Date(createRecordDto.clinicDate),
        };
        this.records[recordIndex] = updatedRecord;
        return updatedRecord;
    }
    remove(id) {
        const recordIndex = this.records.findIndex(record => record.id === id);
        if (recordIndex === -1) {
            throw new common_1.NotFoundException(`Record with ID ${id} not found`);
        }
        this.records.splice(recordIndex, 1);
    }
};
exports.RecordsService = RecordsService;
exports.RecordsService = RecordsService = __decorate([
    (0, common_1.Injectable)()
], RecordsService);
//# sourceMappingURL=records.service.js.map