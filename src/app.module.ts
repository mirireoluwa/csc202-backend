import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientRegistrationModule } from './patient-registration/patient-registration.module';
import { RecordsModule } from './patient-registration/records/records.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "nest-toothfixers",
    entities: [
     __dirname + "/**/*.entity{.ts,.js}"
    ],
    synchronize: true,
    autoLoadEntities: true
}), PatientRegistrationModule, RecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
