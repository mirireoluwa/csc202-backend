import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './entities/patient.entity';
//import { Record } from './entities/record.entity';
import { Repository } from 'typeorm';
import { CreateRecordDto } from '../records/dto/create-record.dto';
import { Record } from '../records/entities/record.entity';

@Injectable()
export class PatientsService {
  [x: string]: any;
  unsetRecordById(patientId: number) {
    throw new Error('Method not implemented.');
  }
  setRecordById(patientId: number, recordId: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(Patient)
    private patientsRepository: Repository<Patient>,
    // @InjectRepository(Record)
    // private recordRepository: Repository<Record>,
  ) {}

  async create(createPatientDto: CreatePatientDto) {
    const newPatient: Patient = this.patientsRepository.create(createPatientDto)

    // if(createPatientDto.record) {
    //   const newRecord = this.recordRepository.create(createPatientDto.record);

    //   const record: Record = await this.recordRepository.save(newRecord);
    //   newPatient.record = record;
    // }
    return this.patientsRepository.save(newPatient);
    //return 'This action adds a new patient';
  }


  async findAll() {
    //return `This action returns all patients`;
    return await this.patientsRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} patient`;
    return await this.patientsRepository.findOne({
      where: {
        id //same as id:id
      }});
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    //return `This action updates a #${id} patient`;
    return await this.patientsRepository.update(id, updatePatientDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} patient`;
    return await this.patientsRepository.delete(id);
  }

  async setUserById(patientId: number, userId:
    number) {
    try {
    return await
    this.patientsRepository.createQueryBuilder()
    .relation(Patient, "record")
    .of(patientId)
    .set(userId)
    } catch (error) {
    throw new HttpException({
    status:
    HttpStatus.INTERNAL_SERVER_ERROR,
    error: `There was a problem setting user for
    patient: ${error.message}`,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetUserById(patientId: number) {
    try {
    return await
    this.patientsRepository.createQueryBuilder()
    .relation(Patient, "record")
    .of(patientId)
    .set(null)
    } catch (error) {
    throw new HttpException({
    status:
    HttpStatus.INTERNAL_SERVER_ERROR,
    error: `There was a problem unsetting user
    for student: ${error.message}`,
    }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
