export class CreateRecordDto {
  readonly patientId: number;
  readonly clinicDate: string;
  readonly natureOfAilment: string;
  readonly medicinePrescribed: string;
  readonly dateOfBirth: Date;
  readonly procedureUndertaken: string;
  dateofAppointment: Date;
}

