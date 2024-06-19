import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRecordDto } from './dto/create-record.dto';
import { Record } from './entities/record.entity'; // Assuming you have a Record entity
import { Patient } from '../patients/entities/patient.entity'; // Assuming you have a Patient entity

@Injectable()
export class RecordsService {
  private records: Record[] = []; // Assuming you have an array to store records

  create(createRecordDto: CreateRecordDto): Record {
    const newRecord: Record = {
      id: this.records.length + 1,
      clinicDate: new Date(createRecordDto.clinicDate),
      natureofAilment: createRecordDto.natureOfAilment,
      medicinePrescribed: createRecordDto.medicinePrescribed,
      dateofAppointment: createRecordDto.dateofAppointment,
      procedureUndertaken: '', // Initialize or set as needed
      patient: null,
      patientId: createRecordDto.patientId // Assign patientId from dto
    };
    this.records.push(newRecord);
    return newRecord;
  }

  findAll(): Record[] {
    return this.records;
  }

  findOne(id: number): Record {
    const record = this.records.find(record => record.id === id);
    if (!record) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    return record;
  }

  update(id: number, createRecordDto: CreateRecordDto): Record {
    const record = this.findOne(id);
    Object.assign(record, createRecordDto);
    return record;
  }

  updateRecordForPatient(patientId: number, recordId: number, createRecordDto: CreateRecordDto): Record {
    const recordIndex = this.records.findIndex(record => record.id === recordId && record.patientId === patientId);
    if (recordIndex === -1) {
      throw new NotFoundException(`Record with ID ${recordId} for Patient with ID ${patientId} not found`);
    }

    const updatedRecord: Record = {
      ...this.records[recordIndex],
      ...createRecordDto,
      clinicDate: new Date(createRecordDto.clinicDate), // Convert string to Date
    };

    this.records[recordIndex] = updatedRecord;
    return updatedRecord;
  }

  remove(id: number): void {
    const recordIndex = this.records.findIndex(record => record.id === id);
    if (recordIndex === -1) {
      throw new NotFoundException(`Record with ID ${id} not found`);
    }
    this.records.splice(recordIndex, 1);
  }
}
