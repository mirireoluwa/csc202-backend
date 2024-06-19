import { Module } from '@nestjs/common';
import { RecordsModule } from './records/records.module';
import { PatientsModule } from './patients/patients.module';

@Module({
  imports: [RecordsModule, PatientsModule]
})
export class PatientRegistrationModule {}
