import { IsNotEmpty, IsString } from "class-validator";
import { CreateRecordDto } from "src/patient-registration/records/dto/create-record.dto";

export class CreatePatientDto {
    @IsNotEmpty({message : "First name should not be empty"})
    @IsString()
    readonly firstName: string;
    @IsNotEmpty({message : " Surname should not be empty"})
    @IsString()
    readonly surName: string;
    readonly middleName: string;  
    readonly dateOfBirth: Date; 
    @IsNotEmpty({message : "home address should not be empty"})
    @IsString()
    readonly homeAddress: string;
    readonly dateOfRegistration: string;

    // readonly clinicalRecord: CreateClinicalRecordDto;
}